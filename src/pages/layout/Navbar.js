import React from "react";
import {Link} from "react-router-dom";

import BaseNavbarLinkItem from "components/base/navbar/BaseNavbarLinkItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt, faCircleNotch, faUser} from "@fortawesome/free-solid-svg-icons";

import {useIsLoggedIn} from "hooks/user/useIsLoggedIn";
import {useSelector} from "react-redux";
import {getAppIsLoggingOut} from "../../store/app/selectors";


export default function Navbar () {

    const isLoggedIn = useIsLoggedIn()
    const isLoggingOut = useSelector(getAppIsLoggingOut)

    return (
        <nav className="navbar navbar-light bg-light px-0 border-bottom">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <ul className="navbar-nav d-flex flex-row">
                    {
                        isLoggedIn
                            ?
                                <>
                                    <BaseNavbarLinkItem className="ml-2" to='/' label="Home"/>
                                    <BaseNavbarLinkItem className="ml-2" to='/todo' label="Todo"/>
                                    <BaseNavbarLinkItem className="ml-2" to='/posts' label="Posts" isExact={false}/>
                                    <BaseNavbarLinkItem className="ml-3" to='/profile'>
                                        <FontAwesomeIcon icon={faUser}/>
                                    </BaseNavbarLinkItem>
                                    <div className="border-right ml-3 mr-2"/>
                                    <BaseNavbarLinkItem className="ml-2" to='/logout'>
                                        <FontAwesomeIcon icon={isLoggingOut ? faCircleNotch : faSignOutAlt}/>
                                    </BaseNavbarLinkItem>
                                </>
                            :
                                <BaseNavbarLinkItem className="ml-2" to='/login' label="Login"/>
                    }
                </ul>
            </div>
        </nav>
    );
}