import React from "react";
import {useStore} from "react-redux";

export default function BaseForm ({handleSubmit, children}) {
    const store = useStore()

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(store)
    }

    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}