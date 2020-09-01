import {get, post, put, del} from "./base"

export const getPosts = () => get('/posts');

export const createPost = (data) => post('/posts', data);

export const getPost = (id) => get(`/posts/${id}`);

export const updatePost = (id, data) => put(`/posts/${id}`, data);

export const deletePost = (id) => del(`/posts/${id}`);