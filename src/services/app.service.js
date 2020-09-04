import {get, HttpValidationErrors} from "./base";
import sleep from "../utils/sleep";

export const appService = {
    login,
    logout
};

async function login({login, password, rememberMe}) {

    const errors = {};

    if(!errors?.login && `${login}`.trim().length === 0) errors.login = "Login is required.";
    if(!errors?.login && `${login}`.length < 3) errors.login = "Login cannot be less than 3 chars.";
    if(!errors?.password && `${password}`.trim().length === 0) errors.password = "password is required.";
    if(!errors?.password && `${password}`.length < 3) errors.password = "password cannot be less than 6 chars.";

    if(Object.keys(errors).length > 0) {
        await sleep(200)
        throw new HttpValidationErrors('Failed validation', errors)
    }

    const res = await get(`/users?username=${login}&password=${password}`)

    if(!res.data || res.data.length === 0) {
        // Server validation:
        // throw new HttpValidationErrors('Failed validation', {
        //     login: 'User not found or password is incorrect'
        // })
        throw new Error('User not found or password is incorrect')
    }

    // Due to mock api:
    res.data = res.data[0];

    return res;
}

function logout() {
    return Promise.resolve();
}