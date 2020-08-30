import React, {useEffect} from "react";
import NavbarItem from "./NavbarItem";
import {Link, useHistory} from "react-router-dom";

export default function Navbar () {
    let history = useHistory();

    useEffect(() => {
        return history.listen((location) => {
            console.log(`You changed the page to: ${location.pathname}`)
        })
    }, [history])

    return (
        <nav className="navbar navbar-light bg-light px-0 border-bottom">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <ul className="navbar-nav d-flex flex-row">
                    <NavbarItem className="ml-2" to='/' label="Home"/>
                    <NavbarItem className="ml-2" to='/todo' label="Todo"/>
                    <NavbarItem className="ml-2" to='/posts' label="Posts" isExact={false}/>
                </ul>
            </div>
        </nav>
    );
}