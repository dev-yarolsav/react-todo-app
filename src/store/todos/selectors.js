import {getLoadingStatus} from "../loading/selectors";

import {ADD_TODO, LOAD_TODOS} from "./actions";

export const getTodosState = store => store.todos;

export const getTodoList = store =>
    getTodosState(store) ? getTodosState(store).list : [];

export const getTodoById = (store, id) =>
    getTodosState(store) ? {...getTodosState(store).entities[id], id} : {};

export const getTodos = store =>
    getTodoList(store).map(id => getTodoById(store, id));

export const getTodosLoaders = store => {
    return {
        isLoading: getLoadingStatus(store, LOAD_TODOS),
        isAdding: getLoadingStatus(store, ADD_TODO),
    };
}