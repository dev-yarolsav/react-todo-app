import {handleFormFieldChange, handleFormSubmitAsync} from "../../utils/form";

import {getAppLoginForm} from "./selectors";
import {APP_LOGIN_FORM} from "./enums";
import {APP_LOGOUT_USER, appLoginUser, appLogoutUser} from "./actions";
import {appService} from "../../services/app.service";
import sleep from "../../utils/sleep";
import {startLoading, stopLoading} from "../loading/actions";
import {getLoadingStatus} from "../loading/selectors";

export const handleLoginFormSubmit = async (store) => {
    const {isSubmitting, fields} = getAppLoginForm(store.getState());

    if(isSubmitting) return null;

    const {data} = await handleFormSubmitAsync(store, APP_LOGIN_FORM, () => appService.login(fields))

    if(data?.id) {
        store.dispatch(appLoginUser({id: data.id}))
    }

    return null;
}
export const handleLoginFormChange = (store, {name, value}) => {
    handleFormFieldChange(store, APP_LOGIN_FORM, {name, value})
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