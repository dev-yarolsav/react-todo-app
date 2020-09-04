import {createFormReducer, createFormState} from "utils/form";
import {APP_LOGIN_FORM} from "./enums";
import {APP_LOGIN_USER, APP_LOGOUT_USER} from "./actions";

const getRememberedUserId = () => {
    return +window.localStorage.getItem('userId') || null;
}
const rememberUserId = (id) => {
    window.localStorage.setItem('userId', id)
}

const initialState = {
    userId: getRememberedUserId(),
    loginForm: createFormState({
        login: '',
        password: '',
        rememberMe: true
    }),
};

const loginForm = createFormReducer(APP_LOGIN_FORM);

const userId = (state, action) => {
    if(action.type === APP_LOGIN_USER) {
        rememberUserId(action.payload.id)
        return action.payload.id;
    } else if(action.type === APP_LOGOUT_USER) {
        rememberUserId(null)
        return null;
    } else {
        return state;
    }
}

export default (state = initialState, action) => ({
    userId: userId(state.userId, action),
    loginForm: loginForm(state.loginForm, action)
})