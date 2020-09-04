import {getLoadingStatus} from "../loading/selectors";
import {APP_LOGOUT_USER} from "./actions";
import {getUserById} from "../entities/selectors";
import {SET_USERS} from "../entities/actions";

export const getAppState          = store => store.app;

export const getAppUserId         = store => getAppState(store) ? getAppState(store).userId : null;
export const getAppUser           = store => getAppUserId(store) ? getUserById(store, getAppUserId(store)) : null;
export const getAppUserIsLoggedIn = store => getAppUserId(store) != null;
export const getAppUserIsGuest    = store => getAppUserId(store) == null;
export const getIsLoadingLoggedInUser = store => getLoadingStatus(store, [SET_USERS, getAppUserId(store)]);

export const getAppIsLoggingOut   = store => getLoadingStatus(store, APP_LOGOUT_USER);

export const getAppLoginForm      = store => getAppState(store) ? getAppState(store).loginForm : null;
export const getAppSignupForm     = store => getAppState(store) ? getAppState(store).signupForm : null;