import React from "react";

import TodoItem from "./TodoItem";

export default function TodoList ({ items, onToggle, onRemove, isLoading, errorText }) {
    return (
        <div className="todo-list">
            {
                isLoading && !items.length && <div className="text-center p-3 text-muted">Loading...</div>
            }
            {
                !isLoading && !items.length && <div className="text-center p-3 text-info">There are no todos yet</div>
            }
            {
                !isLoading && errorText && <div className="text-center p-3 text-error">{errorText}</div>
            }
            <ul className="list-group">
                { items.map(({id, text, completed}) =>
                        <TodoItem key={id} description={text} isCompleted={completed}
                                  className="list-group-item"
                                  id={id}
                                  onToggle={onToggle(id, completed)}
                                  onRemove={onRemove(id)}/>) }
            </ul>
        </div>
    );
}