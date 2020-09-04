import React from "react";
import { Redirect } from "react-router-dom";

import {useIsLoggedIn} from "hooks/user/useIsLoggedIn";
import {HomePath} from "../../routes";
import AppSignupForm from "../../components/app/AppSignupForm";

export default function AppSignupPage () {
    const isLoggedIn = useIsLoggedIn()

    return (
        <div className="card m-4">
            <div className="card-header">Create new account</div>
            <div className="card-body">
                {isLoggedIn && <Redirect to={HomePath()} />}
                <AppSignupForm/>
            </div>
        </div>
    );
}