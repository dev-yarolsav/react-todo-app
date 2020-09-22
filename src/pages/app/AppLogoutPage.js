import React, {useEffect} from "react";
import {useLoggedInUserId} from "../../hooks/user/useLoggedInUserId";
import {useStore} from "react-redux";
import { Redirect } from "react-router-dom";
import {HomePath} from "../../routes";
import {handleAppLogout} from "../../store/app/handlers";

export default function AppLogoutPage() {
    const userId = useLoggedInUserId();
    const store = useStore()

    useEffect(() => void handleAppLogout(store), [userId, store])

    return (
        <div>
            { userId ? "Logging out..." : <Redirect to={HomePath()}/> }
        </div>
    )
}