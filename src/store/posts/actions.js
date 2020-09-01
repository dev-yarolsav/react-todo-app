export const ADD_POST = "ADD_POST";
export const LOAD_POST = "LOAD_POST";
export const LOAD_POSTS = "LOAD_POSTS";
export const UPDATE_POST = "UPDATE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const addPost = (id, {authorId, imageUrl, text, createdAt}) => ({
    type: ADD_POST,
    payload: { id, authorId, imageUrl, text, createdAt }
});

export const loadPost = (id, {authorId, imageUrl, text, createdAt}) => ({
    type: LOAD_POST,
    payload: { id, authorId, imageUrl, text, createdAt }
});

export const loadPosts = posts => ({
    type: LOAD_POSTS,
    payload: { posts }
});

export const updatePost = (id, {imageUrl, text}) => ({
    type: UPDATE_POST,
    payload: { id, imageUrl, text }
});

export const removePost = id => ({
    type: REMOVE_POST,
    payload: { id }
});

