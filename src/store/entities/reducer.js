import {arr2map} from "../../utils/arr2map";

import {SET_POSTS, SET_TODOS, SET_USERS} from "./actions";

const initialState = {
    users: {},
    posts: {},
    todos: {},
    tags: {}
};

const setUser = (state, {id, name, username}) => {
    return {
        ...(state || {}),
        id,
        name,
        username
    }
}
const setTodo = (state, {id, text, userId, user, completed}) => {
    return {
        ...(state || {}),
        id,
        text,
        user: userId || user?.id,
        completed
    }
}
const setPost = (state, {id, title, text, authorId, author, tags}) => {
    return {
        ...(state || {}),
        id,
        title,
        text,
        author: authorId || author?.id,
        tags: (tags ? tags.map(t => t.id) : []),
    }
}
const setTag = (state, {id, name}) => {
    return {
        ...(state || {}),
        id,
        name
    }
}

const users = (state, action) => {
    if([SET_USERS, SET_TODOS].indexOf(action.type) === -1) {
        return state;
    }

    const {items} = action.payload;

    let entities = [];
    if(action.type === SET_USERS) {
        entities = items;
    } else if(action.type === SET_TODOS) {
        entities = items.map(i => i.user).filter(i => i != null);
    } else if(action.type === SET_POSTS) {
        entities = items.map(i => i.author).filter(i => i != null);
    }

    if(entities.length) {
        return {
            ...state,
            ...arr2map(entities, entity => setUser(state[entity.id], entity))
        };
    }

    return state;
}
const posts = (state, action) => {
    if([SET_POSTS].indexOf(action.type) === -1) {
        return state;
    }

    let entities = [];
    const {items} = action.payload;

    if(action.type === SET_POSTS) {
        entities = items;
    }

    if(entities.length) {
        return {
            ...state,
            ...arr2map(entities, entity => setPost(state[entity.id], entity))
        };
    }

    return state;
}
const todos = (state, action) => {
    if([SET_TODOS].indexOf(action.type) === -1) {
        return state;
    }

    let entities = [];
    const {items} = action.payload;

    if(action.type === SET_TODOS) {
        entities = items;
    }

    if(entities.length) {
        return {
            ...state,
            ...arr2map(entities, entity => setTodo(state[entity.id], entity))
        };
    }

    return state;
}

const tags = (state, action) => {
    if([SET_POSTS].indexOf(action.type) === -1) {
        return state;
    }

    let entities = [];
    const {items} = action.payload;

    if(action.type === SET_POSTS) {
        entities = items.map(i => i.tags || []).flat();
    }

    if(entities.length) {
        return {
            ...state,
            ...arr2map(entities, entity => setTag(state[entity.id], entity))
        };
    }

    return state;
}


export default (state = initialState, action) => {
    const next = {
        users: users(state.users, action),
        posts: posts(state.posts, action),
        todos: todos(state.todos, action),
        tags: tags(state.tags, action),
    };

    return next;
}