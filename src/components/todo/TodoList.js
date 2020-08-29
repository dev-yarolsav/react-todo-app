import React from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";


export default function TodoList ({ items, onAdd, onToggle, onRemove, isAdding }) {
    return (
        <div className="todo-list">
            <div className="card">
                <div className="card-header">Add todo</div>
                <div className="card-body">
                    <TodoForm onSubmit={onAdd} isSaving={isAdding}/>
                </div>
            </div>
            <ul className="list-group mt-2">
                {   items.length
                    ? items.map(({id, text, completed}) =>
                        <TodoItem key={id} description={text} isCompleted={completed}
                                  className="list-group-item"
                                  onToggleCompleted={() => onToggle(id)}
                                  onRemove={() => onRemove(id)}/>)
                    : <div className="text-center p-3 text-muted">There are no todos yet</div>
                }
            </ul>
        </div>
    );
}