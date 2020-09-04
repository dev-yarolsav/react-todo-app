import {arr2map} from "../../utils/arr2map";

import {DEL_USERS, SET_USERS} from "./actions";

const initialState = {
    users: {},
    posts: {},
    todos: {},
};

const users = (state, action) => {
    if(action.type === SET_USERS) {
        const {items} = action.payload;
        return {
            ...state,
            ...arr2map(items, ({id, name, username}) => ({
                ...(state[id] || {}),
                id,
                name,
                username
            }))
        };
    } else if(action.type === DEL_USERS) {
        const {ids} = action.payload;
        return {
            ...state,
            ...ids.reduce((acc, id) => {
                acc[id] = null;
                return acc;
            }, {})
        };
    }

    return state;
}
const posts = (state, action) => {
    return state;
}
const todos = (state, action) => {
    return state;
}

export default (state = initialState, action) => {
    const next = {
        users: users(state.users, action),
        posts: posts(state.posts, action),
        todos: todos(state.todos, action),
    };
    // console.log(next);
    return next;
}

// export default (state = initialState, action) => {
//
//     if('SET_POSTS' === action) {
//         const {items} = action.payload;
//         return {
//             ...state,
//             posts: {
//                 ...state.posts,
//                 ...arr2map(items, ({id, title, text, author}) => ({
//                     ...(state.posts[id] || {}),
//                     id,
//                     title,
//                     text,
//                     author: author?.id || (state.posts?.[id]?.author)
//                 }))
//             },
//             users: {
//                 ...state.users,
//                 ...arr2map(items, ({author}) => {
//                     const {id, name} = author;
//                     return {
//                         ...(state.users[author.id] || {}),
//                         id,
//                         name,
//                     }
//                 })
//             }
//         };
//     } else if('SET_TODOS' === action) {
//         const {items} = action.payload;
//         return {
//             ...state,
//             todos: {
//                 ...state.todos,
//                 ...arr2map(items, ({id, text, completed}) => ({
//                     ...(state.todos[id] || {}),
//                     id,
//                     text,
//                     completed
//                 }))
//             },
//         };
//     } else if('SET_USERS' === action) {
//         const {items} = action.payload;
//         return {
//             ...state,
//             users: {
//                 ...state.users,
//                 ...arr2map(items, ({id, name}) => ({
//                     ...(state.users[id] || {}),
//                     id,
//                     name,
//                 }))
//             },
//         };
//     }
//
// };