import React, {useEffect} from 'react';
import {useSelector, useStore} from "react-redux";

import 'App.css';
import RootPage from "pages/RootPage";

import {useLoggedInUserId} from "./hooks/user/useLoggedInUserId";
import {useLoggedInUser} from "./hooks/user/useLoggedInUser";
import {loadLoggedInUser} from "./store/app/handlers";
import {getIsLoadingLoggedInUser} from "./store/app/selectors";

export default function App() {

    const store = useStore();
    const userId = useLoggedInUserId();
    const user = useLoggedInUser();
    const isLoading = useSelector(getIsLoadingLoggedInUser)

    useEffect(() => {
        loadLoggedInUser(store)
    }, [userId, store])

    return (
        <div className="App">
            { userId && user && <RootPage/> }
            { userId && !user && isLoading && <div className="p-5 text-center">Loading...</div> }
            { userId && !user && !isLoading && <div className="p-5 text-danger">Error: unable to load a user</div> }
            { !userId && !user && <RootPage/> }
        </div>
    );
}
