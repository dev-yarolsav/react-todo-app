import React, {useState} from "react";

import TodoItem from "./TodoItem";

function TodoList() {

    console.log('todolist...');

    const [form, setForm] = useState({
        desc: ''
    })

    const [items, setItems] = useState({
        list: [1, 2, 3],
        entities: {
            1: {id:1, desc: 'todo #1', done: false},
            2: {id:2, desc: 'todo #2', done: true},
            3: {id:3, desc: 'todo #3', done: false},
        }
    })

    // Form:

    const onChangeDesc = e => {
        setForm({
            desc: e.target.value
        })
    }

    const canSubmitForm = () => form.desc.length > 2;

    const onSubmitForm = e => {
        e.preventDefault();

        if(canSubmitForm()) {
            const nextId = items.list.length + 1;
            setItems({
                ...items,
                list: [...items.list, nextId],
                entities: {
                    ...items.entities,
                    [nextId]: {
                        id: nextId, desc: form.desc, done: false
                    }
                }
            })
            setForm({
                desc: ''
            })
        }
    }

    // List...


    const toggleCompleted = (id) => {
        console.log('toggleCompleted', id)
        setItems({
            ...items,
            entities: {
                ...items.entities,
                [id]: {
                    ...items.entities[id],
                    done: !items.entities[id].done
                }
            }
        })
    }

    const remove = id => {
        console.log('remove', id)
        const newEntities = {...items.entities}
        delete newEntities[id];
        setItems({
            ...items,
            list: items.list.filter(_id => _id !== id),
            entities: newEntities
        })
    }

    const todos = () => {
        console.log('todos')
        return items.list.map(id => items.entities[id]);
    }

    const listItems = todos().map(todo =>
        <TodoItem key={todo.id} item={todo} toggleCompleted={toggleCompleted} remove={remove}/>)

    return (
        <div>
            <div className={'card'}>
                <div className={'card-header'}>
                    Add todo
                </div>
                <div className={'card-body'}>
                    <form onSubmit={onSubmitForm}>
                        <div className="input-group">
                            <input value={form.desc} onChange={onChangeDesc} type="text" className="form-control" placeholder="What to do?"/>
                            <div className="input-group-append">
                                <button disabled={!canSubmitForm()} className="btn btn-primary" type="submit">add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ul className={'list-group mt-2'}>
                {listItems}
            </ul>
        </div>
    );
}

export default TodoList;