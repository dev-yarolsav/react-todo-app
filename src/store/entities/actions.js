
export const SET_USERS = 'SET_USERS'
export const SET_TODOS = 'SET_TODOS'
export const SET_POSTS = 'SET_POSTS'

export const setUsers = ({items}) => ({
    type: SET_USERS,
    payload: {items}
});

export const setTodos = ({items}) => ({
    type: SET_TODOS,
    payload: {items}
});

export const setPosts = ({items}) => ({
    type: SET_POSTS,
    payload: {items}
});