import {get, post, put, del} from "./base"

export const getAllTodos = () => get('/todos');

export const createTodo = (data) => post('/todos', data);

export const getTodo = (id) => get(`/todos/${id}`);

export const updateTodo = (id, data) => put(`/todos/${id}`, data);

export const deleteTodo = (id) => del(`/todos/${id}`);