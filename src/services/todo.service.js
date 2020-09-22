import {get, post, patch, remove} from "./base";

export const todoService = {
    all(params = {}) {
        params._expand = 'user'
        return get(`/todos`, { params })
    },
    one(id) {
        return get(`/todos/${id}`)
    },
    create(data) {
        return post('/todos', data)
    },
    update(id, data) {
        return patch(`/todos/${id}`, data)
    },
    delete(id) {
        return remove(`/todos/${id}`)
    }
};