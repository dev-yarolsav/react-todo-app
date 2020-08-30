export const LOAD_TODOS = "LOAD_TODOS";
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (id, {text, completed}) => ({
    type: ADD_TODO,
    payload: { id, text, completed }
});

export const toggleTodo = (id, {completed}) => ({
    type: TOGGLE_TODO,
    payload: { id, completed }
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: { id }
});

export const loadTodos = items => ({
    type: LOAD_TODOS,
    payload: { items }
})
