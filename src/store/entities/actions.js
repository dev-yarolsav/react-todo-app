
export const SET_USERS = 'SET_USERS'
export const DEL_USERS = 'DEL_USERS'

export const setUsers = ({items}) => ({
    type: SET_USERS,
    payload: {items}
});
export const delUsers = ({ids}) => ({
    type: SET_USERS,
    payload: {ids}
});