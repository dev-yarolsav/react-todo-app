export const getEntitiesState = store => store.entities;

export const getEntitiesUsers = store =>
    getEntitiesState(store) ? getEntitiesState(store).users : {};

export const getUserById = (store, id) => getEntitiesUsers(store)[id] || null;