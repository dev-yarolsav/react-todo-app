import React, {useEffect, useState} from "react";
import cs from "classnames"
import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm";
import {useDispatch, useSelector, useStore} from "react-redux";

import {submitAddTodo, postRemoveTodo, postToggleTodo, loadTodosByUser} from "../store/todos/calls";
import {TodoListPageStateSelector} from "../store/selectors";

export default function TodoPage () {

    const store = useStore()
    const dispatch = useDispatch()
    const [filter, setFilter] = useState(0)
    const {userId, todos, isLoading, isAdding} = useSelector(TodoListPageStateSelector);

    useEffect(() => void loadTodosByUser({dispatch, store}, userId), [dispatch, store, userId])

    const handleAdd = data => submitAddTodo({dispatch, store}, data)
    const handleToggle = (id, completed) => () => postToggleTodo({dispatch, store}, {id, completed: !completed})
    const handleRemove = id => () => postRemoveTodo({dispatch, store}, id)

    const handleSetFilter = val => e => {
        e.preventDefault();
        setFilter(val);
    }

    const items = (filter) => {
        switch (filter) {
            case 0: return todos;
            case 1: return todos.filter(t => !t.completed);
            case 2: return todos.filter(t => t.completed);
            default: return [];
        }
    }

    return (
        <div>
            <div className="card">
                <div className="card-header">Add todo</div>
                <div className="card-body">
                    <TodoForm onSubmit={handleAdd} isSaving={isAdding}/>
                </div>
            </div>
            <div className="d-flex justify-content-center my-1">
                <a href="#all" className={cs({'mx-2': true, 'text-muted': filter === 0})} onClick={handleSetFilter(0)}>all ({items(0).length})</a>|
                <a href="#todo" className={cs({'mx-2': true, 'text-muted': filter === 1})} onClick={handleSetFilter(1)}>todo ({items(1).length})</a>|
                <a href="#done" className={cs({'mx-2': true, 'text-muted': filter === 2})} onClick={handleSetFilter(2)}>done ({items(2).length})</a>
            </div>
            <TodoList items={items(filter)}
                      isLoading={isLoading}
                      onToggle={handleToggle}
                      onRemove={handleRemove}/>
        </div>
    );
}