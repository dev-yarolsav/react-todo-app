import React from "react";
import {Link, useRouteMatch} from "react-router-dom";

export default function NavbarItem ({to, label}) {
    const match = useRouteMatch(to);
    const isActive = match && match.isExact;

    return (
        <li className={"nav-item" + (isActive ? ' active' : '')}>
            <Link className="nav-link" to={to}>{label}</Link>
        </li>
    );
}