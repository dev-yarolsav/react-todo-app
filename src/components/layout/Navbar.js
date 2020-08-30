import React, {useState} from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar () {

    const [showNav, setShowNav] = useState(false);

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" onClick={() => setShowNav(!showNav)}>
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={'navbar-collapse collapse' + (showNav ? ' show' : '')}>
                <ul className="navbar-nav">
                    <NavbarItem to='/' label="Home"/>
                    <NavbarItem to='/todo' label="Todo"/>
                </ul>
            </div>
        </nav>
    );
}