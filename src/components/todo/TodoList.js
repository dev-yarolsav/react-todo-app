import React from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList ({ items, onAdd, onToggle, onRemove, isLoading, isAdding }) {
    return (
        <div className="todo-list">
            <div className="card border-bottom-0">
                <div className="card-header">Add todo</div>
                <div className="card-body">
                    <TodoForm onSubmit={onAdd} isSaving={isAdding}/>
                </div>
            </div>
            <ul className="list-group">
                {   items.length
                    ? items.map(({id, text, completed}) =>
                        <TodoItem key={id} description={text} isCompleted={completed}
                                  className="list-group-item"
                                  onToggleCompleted={(s) => onToggle(id, s)}
                                  onRemove={() => onRemove(id)}/>)
                    : <div className="text-center p-3 text-muted">{isLoading ? 'Loading...' : 'There are no todos yet'}</div>
                }
            </ul>
        </div>
    );
}