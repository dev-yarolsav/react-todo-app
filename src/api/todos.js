import {get, post, patch, remove} from "./base"

export const getAllTodos = () => get('/todos');

export const createTodo = (data) => post('/todos', data);

export const getTodo = (id) => get(`/todos/${id}`);

export const updateTodo = (id, data) => patch(`/todos/${id}`, data);

export const deleteTodo = (id) => remove(`/todos/${id}`);