import React, {useState} from "react";

import TodoItem from "./TodoItem";

function TodoList() {

    console.log('todolist...');

    const [items, setItems] = useState({
        list: [1, 2, 3],
        entities: {
            1: {id:1, desc: 'todo #1', done: false},
            2: {id:2, desc: 'todo #2', done: true},
            3: {id:3, desc: 'todo #3', done: false},
        }
    })

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

    const itemsList = () => {
        console.log('itemsList')
        return items.list.map(id => items.entities[id]);
    }

    return (
        <div>
            <ul className={'list-group'}>
                {
                    itemsList().map(todo =>
                        <TodoItem key={todo.id} item={todo} toggleCompleted={toggleCompleted}/>
                    )
                }
            </ul>
        </div>
    );
}

export default TodoList;