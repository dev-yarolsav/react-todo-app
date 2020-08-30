import {LOGIN_USER, LOGOUT_USER} from "./actions";

const initialState = {
    loggedInUserId: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            const { id } = action.payload;
            return {
                ...state,
                loggedInUserId: id
            };
        }
        case LOGOUT_USER: {
            // const { id } = action.payload;
            return {
                ...state,
                loggedInUserId: null
            };
        }
        default:
            return state;
    }
};