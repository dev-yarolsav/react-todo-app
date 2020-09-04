import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";

export default function BaseButton ({type, label, children, size, styleName, isLoading, disabled, onClick}) {
    let classes = ["btn"];

    if(size) classes.push(`btn-${size}`);

    classes.push(`btn-${styleName || 'default'}`);

    return (
        <button type={type || 'button'} className={classes.join(" ")} disabled={disabled || isLoading} onClick={onClick}>
            {isLoading && <FontAwesomeIcon icon={faCircleNotch} spin/>} { label || children }
        </button>
    );
}