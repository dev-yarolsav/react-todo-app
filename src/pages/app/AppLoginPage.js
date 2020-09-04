import React from "react";
import { Redirect } from "react-router-dom";
import AppLoginForm from "components/app/AppLoginForm";
import {useIsLoggedIn} from "hooks/user/useIsLoggedIn";
import {HomePath} from "../../routes";

export default function AppLoginPage () {
    const isLoggedIn = useIsLoggedIn()

    return (
        <div className="card m-4">
            <div className="card-header">You have to login</div>
            <div className="card-body">
                {isLoggedIn && <Redirect to={HomePath()} />}
                <AppLoginForm/>
            </div>
        </div>
    );
}