import React from "react";

import TodoItem from "./TodoItem";

export default function TodoList ({ items, onToggle, onRemove, isLoading }) {
    return (
        <div className="todo-list">
            <ul className="list-group">
                {   items.length
                    ? items.map(({id, text, completed, isToggling, isRemoving}) =>
                        <TodoItem key={id} description={text} isCompleted={completed}
                                  className="list-group-item"
                                  onToggleCompleted={onToggle(id, completed)}
                                  isToggling={isToggling}
                                  isRemoving={isRemoving}
                                  onRemove={onRemove(id)}/>)
                    : <div className="text-center p-3 text-muted">{isLoading ? 'Loading...' : 'There are no todos yet'}</div>
                }
            </ul>
        </div>
    );
}