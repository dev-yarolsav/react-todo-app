import {arr2map} from "../../utils/arr2map";

const initialState = {
    posts: {},
    todos: {},
    users: {}
};

export default (state = initialState, action) => {

    if('SET_POSTS' === action) {
        const {items} = action.payload;
        return {
            ...state,
            posts: {
                ...state.posts,
                ...arr2map(items, ({id, title, text, author}) => ({
                    ...(state.posts[id] || {}),
                    id,
                    title,
                    text,
                    author: author?.id || (state.posts?.[id]?.author)
                }))
            },
            users: {
                ...state.users,
                ...arr2map(items, ({author}) => {
                    const {id, name} = author;
                    return {
                        ...(state.users[author.id] || {}),
                        id,
                        name,
                    }
                })
            }
        };
    } else if('SET_TODOS' === action) {
        const {items} = action.payload;
        return {
            ...state,
            todos: {
                ...state.todos,
                ...arr2map(items, ({id, text, completed}) => ({
                    ...(state.todos[id] || {}),
                    id,
                    text,
                    completed
                }))
            },
        };
    } else if('SET_USERS' === action) {
        const {items} = action.payload;
        return {
            ...state,
            users: {
                ...state.users,
                ...arr2map(items, ({id, name}) => ({
                    ...(state.users[id] || {}),
                    id,
                    name,
                }))
            },
        };
    }

};