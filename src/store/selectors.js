export const getTodosState = store => store.todos;

export const getTodoList = store =>
    getTodosState(store) ? getTodosState(store).list : [];

export const getTodoById = (store, id) =>
    getTodosState(store) ? {...getTodosState(store).entities[id], id} : {};

export const getTodos = store =>
    getTodoList(store).map(id => getTodoById(store, id));