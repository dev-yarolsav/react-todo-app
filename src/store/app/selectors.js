import {getLoadingStatus} from "../loading/selectors";
import {APP_LOGOUT_USER} from "./actions";

export const getAppState          = store => store.app;

export const getAppUserId         = store => getAppState(store) ? getAppState(store).userId : null;
export const getAppUserIsLoggedIn = store => getAppUserId(store) != null;
export const getAppUserIsGuest    = store => getAppUserId(store) == null;

export const getAppIsLoggingOut   = store => getLoadingStatus(store, APP_LOGOUT_USER);
export const getAppLoginForm      = store => getAppState(store) ? getAppState(store).loginForm : null;