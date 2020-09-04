export const APP_LOGIN_USER = "APP_LOGIN_USER";
export const APP_LOGOUT_USER = "APP_LOGOUT_USER";

export const appLoginUser = ({id}) => ({
    type: APP_LOGIN_USER,
    payload: { id }
});

export const appLogoutUser = () => ({
    type: APP_LOGOUT_USER,
    payload: {}
});