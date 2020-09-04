import React from "react";
import {Link, useRouteMatch} from "react-router-dom";

export default function BaseNavbarLinkItem ({className, to, label, isExact, children}) {
    const match = useRouteMatch(to);

    const isActive = isExact === false ? match != null : match && match.isExact;

    return (
        <li className={"nav-item" + (className ? ' ' + className : '') + (isActive ? ' active' : '')}>
            <Link className="nav-link" to={to}>{label || children }</Link>
        </li>
    );
}