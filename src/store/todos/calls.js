import {getAllTodos, updateTodo, createTodo, deleteTodo} from "../../services/todos";
import {addTodo, loadTodos, toggleTodo, LOAD_TODOS, ADD_TODO, TOGGLE_TODO, removeTodo, REMOVE_TODO} from "./actions";
import {startLoading, stopLoading} from "../loading/actions";
import {getLoadingStatus} from "../loading/selectors";
import {todoService} from "../../services/todo.service";
import {getAppUserId} from "../app/selectors";
import {setTodos} from "../entities/actions";

export const loadTodosByUser = async ({dispatch, store}, userId) => {
    try {
        const {data} = await todoService.all({user_id: 2});
        dispatch(setTodos({items: data}));
        dispatch(loadTodos(data));
    } catch (err) {
        // TODO: handle error
    }
}

export const fetchLoadTodos = async ({dispatch, store}) => {

    if(getLoadingStatus(store, LOAD_TODOS)) {
        return null;
    }

    dispatch(startLoading(LOAD_TODOS));
    try {
        const {data} = await getAllTodos();
        dispatch(loadTodos(data));
    } catch (err) {
        // TODO: handle error
    }
    dispatch(stopLoading(LOAD_TODOS));
}

export const submitAddTodo = async ({dispatch, store}, formData) => {
    if(getLoadingStatus(store.getState(), ADD_TODO)) {
        return null;
    }

    const userId = getAppUserId(store.getState())

    dispatch(startLoading(ADD_TODO));
    try {
        const {data} = await createTodo({
            completed: false,
            ...formData,
            user_id: userId
        });
        dispatch(addTodo(data.id, data));
    } catch (err) {
        // TODO: handle error
    }
    dispatch(stopLoading(ADD_TODO));
}

export const postToggleTodo = async ({dispatch, store}, {id, completed}) => {
    if(getLoadingStatus(store.getState(), [TOGGLE_TODO, id])) {
        return null;
    }

    dispatch(startLoading([TOGGLE_TODO, id]));
    try {
        const {data} = await updateTodo(id, {completed});
        dispatch(toggleTodo(id, data));
    } catch (err) {
        // TODO: handle error
    }
    dispatch(stopLoading([TOGGLE_TODO, id]));
}

export const postRemoveTodo = async ({dispatch, store}, id) => {
    if(getLoadingStatus(store.getState(), [REMOVE_TODO, id])) {
        return null;
    }

    dispatch(startLoading([REMOVE_TODO, id]));
    try {
        await deleteTodo(id);
        dispatch(removeTodo(id));
    } catch (err) {
        // TODO: handle error
    }
    dispatch(stopLoading([REMOVE_TODO, id]));
}