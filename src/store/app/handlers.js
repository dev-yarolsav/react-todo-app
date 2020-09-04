import {handleFormFieldChange, handleFormSubmitAsync} from "../../utils/form";

import {getAppLoginForm, getAppSignupForm, getAppUserId} from "./selectors";
import {APP_LOGIN_FORM, APP_SIGNUP_FORM} from "./enums";
import {APP_LOGOUT_USER, appLoginUser, appLogoutUser} from "./actions";
import {appService} from "../../services/app.service";
import sleep from "../../utils/sleep";
import {startLoading, stopLoading} from "../loading/actions";
import {getLoadingStatus} from "../loading/selectors";
import {SET_USERS, setUsers} from "../entities/actions";
import {userService} from "../../services/user.service";
import {getUserById} from "../entities/selectors";

export const handleLoginFormSubmit = async (store) => {
    const {isSubmitting, fields} = getAppLoginForm(store.getState());

    if(isSubmitting) return null;

    const {data} = await handleFormSubmitAsync(store, APP_LOGIN_FORM, () => appService.login(fields))

    if(data?.id) {
        store.dispatch(setUsers({items: [data]}))
        store.dispatch(appLoginUser(data))
    }

    return null;
}
export const handleLoginFormChange = (store, {name, value}) => {
    handleFormFieldChange(store, APP_LOGIN_FORM, {name, value})
}


export const handleSignupFormSubmit = async (store) => {
    const {isSubmitting, fields} = getAppSignupForm(store.getState());

    if(isSubmitting) return null;

    const {data} = await handleFormSubmitAsync(store, APP_SIGNUP_FORM, () => appService.signup(fields))

    if(data?.id) {
        store.dispatch(setUsers({items: [data]}))
        store.dispatch(appLoginUser(data))
    }

    return null;
}
export const handleSignupFormChange = (store, {name, value}) => {
    handleFormFieldChange(store, APP_SIGNUP_FORM, {name, value})
}


export const handleAppLogout = async ({dispatch, getState}) => {
    if(getLoadingStatus(getState(), APP_LOGOUT_USER)) {
        return null;
    }

    dispatch(startLoading(APP_LOGOUT_USER));
    await sleep(300)
    dispatch(appLogoutUser())
    dispatch(stopLoading(APP_LOGOUT_USER));
}

export const loadLoggedInUser = async ({dispatch, getState}) => {
    const userId = getAppUserId(getState())
    const user = getUserById(getState(), userId)

    if(!userId || user || getLoadingStatus(getState(), [SET_USERS, userId])) {
        return null;
    }

    dispatch(startLoading([SET_USERS, userId]));
    const {data} = await userService.one(userId);
    dispatch(setUsers({items: [data]}))
    dispatch(stopLoading([SET_USERS, userId]));
}