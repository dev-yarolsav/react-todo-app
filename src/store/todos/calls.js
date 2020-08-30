import {getAllTodos, updateTodo, createTodo, deleteTodo} from "../../api/todos";
import {addTodo, loadTodos, toggleTodo, LOAD_TODOS, ADD_TODO, TOGGLE_TODO, removeTodo, REMOVE_TODO} from "./actions";
import {startLoading, stopLoading} from "../loading/actions";

export const fetchLoadTodos = () => async (dispatch) => {
    dispatch(startLoading(LOAD_TODOS));
    try {
        const {data} = await getAllTodos();
        dispatch(loadTodos(data));
    } catch (err) {
        // TODO: handle error
    }
    dispatch(stopLoading(LOAD_TODOS));
}

export const submitAddTodo = formData => async (dispatch) => {
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

export const postToggleTodo = (id, completed) => async (dispatch) => {
    dispatch(startLoading([TOGGLE_TODO, id]));
    try {
        const {data} = await updateTodo(id, {completed});
        dispatch(toggleTodo(id, data));
    } catch (err) {
        // TODO: handle error
    }
    dispatch(stopLoading([TOGGLE_TODO, id]));
}

export const postRemoveTodo = (id) => async (dispatch) => {
    dispatch(startLoading([REMOVE_TODO, id]));
    try {
        await deleteTodo(id);
        dispatch(removeTodo(id));
    } catch (err) {
        // TODO: handle error
    }
    dispatch(stopLoading([REMOVE_TODO, id]));
}