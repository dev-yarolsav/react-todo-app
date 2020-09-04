import {createFormReducer, createFormState} from "utils/form";
import {APP_LOGIN_FORM, APP_SIGNUP_FORM} from "./enums";
import {APP_LOGIN_USER, APP_LOGOUT_USER} from "./actions";
import {freeze, unfreeze} from "../../utils/freeze";

const initialState = {
    userId: unfreeze('userId'),
    loginForm: createFormState({
        login: 'admin',
        password: 'admin',
        rememberMe: true
    }),
    signupForm: createFormState({
        name: '',
        username: '',
        password: '',
    }),
};

const loginForm = createFormReducer(APP_LOGIN_FORM);
const signupForm = createFormReducer(APP_SIGNUP_FORM);

const userId = (state, action) => {
    if(action.type === APP_LOGIN_USER) {
        freeze('userId', action.payload.id)
        return action.payload.id;
    } else if(action.type === APP_LOGOUT_USER) {
        freeze('userId', null)
        return null;
    } else {
        return state;
    }
}

export default (state = initialState, action) => ({
    userId: userId(state.userId, action),
    loginForm: loginForm(state.loginForm, action),
    signupForm: signupForm(state.signupForm, action),
})