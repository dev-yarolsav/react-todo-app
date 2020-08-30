import {getAllTodos, updateTodo, createTodo, deleteTodo} from "../../api/todos";
import {addTodo, loadTodos, toggleTodo, LOAD_TODOS, ADD_TODO, TOGGLE_TODO, removeTodo, REMOVE_TODO} from "./actions";
import {startLoading, stopLoading} from "../loading/actions";
import {getLoadingStatus} from "../loading/selectors";

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
    if(getLoadingStatus(store, ADD_TODO)) {
        return null;
    }

    dispatch(startLoading(ADD_TODO));
    try {
        const {data} = await createTodo({
            completed: false,
            ...formData,
        });
        dispatch(addTodo(data.id, data));
    } catch (err) {
        // TODO: handle error
    }
    dispatch(stopLoading(ADD_TODO));
}

export const postToggleTodo = async ({dispatch, store}, {id, completed}) => {
    if(getLoadingStatus(store, [TOGGLE_TODO, id])) {
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
    if(getLoadingStatus(store, [REMOVE_TODO, id])) {
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