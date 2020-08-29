import React from "react";
import TodoList from "../components/todo/TodoList";
import { connect } from "react-redux";

import { getTodos } from "../store/selectors";
import { addTodo, toggleTodo, removeTodo } from "../store/actions";

const TodoListPage = ({todos, handleAdd, handleToggleCompleted, handleRemove}) => {
    return (
        <div>
            <TodoList items={todos} isAdding={false}
                      onAdd={handleAdd} onToggle={handleToggleCompleted} onRemove={handleRemove}/>
        </div>
    );
}

export default connect(state => ({
    todos: getTodos(state)
}), {
    handleAdd: addTodo,
    handleToggleCompleted: toggleTodo,
    handleRemove: removeTodo
})(TodoListPage);