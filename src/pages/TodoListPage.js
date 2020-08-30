import React, {useEffect} from "react";
import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm";
import {useDispatch, useSelector, useStore} from "react-redux";

import {fetchLoadTodos, submitAddTodo, postRemoveTodo, postToggleTodo} from "../store/todos/calls";
import {getTodos, getTodosLoaders} from "../store/todos/selectors";
import {getUserLoggedInId} from "../store/user/selectors";


export default function TodoListPage () {
    const store = useStore()
    const dispatch = useDispatch()

    const userId = useSelector(getUserLoggedInId)
    const todos = useSelector(getTodos);
    const {isLoading, isAdding} = useSelector(getTodosLoaders);

    useEffect(() => void fetchLoadTodos({dispatch, store}), [dispatch, store, userId])

    const handleAdd    = data            => submitAddTodo({dispatch, store}, data)
    const handleToggle = (id, completed) => () => postToggleTodo({dispatch, store}, {id, completed: !completed})
    const handleRemove = id              => () => postRemoveTodo({dispatch, store}, id)

    return (
        <div>
            <div className="card border-bottom-0">
                <div className="card-header">Add todo</div>
                <div className="card-body">
                    <TodoForm onSubmit={handleAdd} isSaving={isAdding}/>
                </div>
            </div>
            <TodoList items={todos}
                      isLoading={isLoading}
                      onToggle={handleToggle}
                      onRemove={handleRemove}/>
        </div>
    );
}