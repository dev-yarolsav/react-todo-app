import {START_LOADING, STOP_LOADING} from "./actions";

export default (state = {}, action) => {
    const { type, payload } = action;

    if([START_LOADING, STOP_LOADING].indexOf(type) === -1) {
        return state;
    }

    const { loadingKey } = payload

    const key = (loadingKey instanceof Array) ? loadingKey.join('.') : loadingKey;

    return {
        ...state,
        [key]: type === START_LOADING,
    };
};