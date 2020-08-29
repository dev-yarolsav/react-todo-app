import React, {useMemo, useReducer, useState} from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
// import sleep from "../../utils/sleep";

const initState = () => ({
    is: {
        adding: false,
    },
    list: ["1", "2", "3"],
    entities: {
        "1": {id:"1", desc: 'todo #1', done: false},
        "2": {id:"2", desc: 'todo #2', done: true},
        "3": {id:"3", desc: 'todo #3', done: false},
    }
});

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            const {description} = action.payload;
            const nextId = state.list.length + 1;
            return {
                ...state,
                list: [...state.list, nextId],
                entities: {
                    ...state.entities,
                    [nextId]: {
                        id: nextId, desc: description, done: false
                    }
                }
            };
        case 'toggle_complete': {
            const {id} = action.payload;
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [id]: {
                        ...state.entities[id],
                        done: !state.entities[id].done
                    }
                }
            };
        }
        case 'remove': {
            const {id} = action.payload;
            return {
                ...state,
                list: state.list.filter(i => i !== id),
            };
        }
        default:
            throw new Error();
    }
}

// const listItems = state => state.list.map(id => state.entities[id])

export default function TodoList () {
    const [state, dispatch] = useReducer(reducer, null, initState);

    const handleAdd = (data) => {
        dispatch({type: 'add', payload: data});
    }

    const handleToggleCompleted = (id) => () => {
        dispatch({type: 'toggle_complete', payload: {id}});
    }

    const handleRemove = (id) => () => {
        dispatch({type: 'remove', payload: {id}});
    }

    const todoItems = state.list.map(id => state.entities[id])

    return (
        <div className="todo-list">
            <div className="card">
                <div className="card-header">Add todo</div>
                <div className="card-body">
                    <TodoForm onSubmit={handleAdd} isSaving={state.is.adding}/>
                </div>
            </div>
            <ul className="list-group mt-2">
                {
                    todoItems.map(({id, desc, done}) =>
                        <TodoItem key={id} description={desc} isCompleted={done}
                                  className="list-group-item"
                                  onToggleCompleted={handleToggleCompleted(id)}
                                  onRemove={handleRemove(id)}/>)
                }
            </ul>
        </div>
    );
}