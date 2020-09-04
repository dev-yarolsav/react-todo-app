import React from "react";
import cs from "classnames";
import {useStore} from "react-redux";

export default function BaseFormInput ({id, type, name, value, error, handleChange}) {
    const store = useStore()

    const onChange = e => {
        handleChange(store, {
            name: e.target.name,
            value: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        })
    }

    if(type === 'checkbox') {
        return (
            <input id={id}
                   name={name}
                   type={type}
                   checked={value}
                   onChange={onChange}
                   className="form-check-input"
            />
        )
    } else if(type === 'radio') {
        return (
            <input id={id}
                   name={name}
                   type={type}
                   checked={value}
                   onChange={onChange}
                   className="form-radio-input"
            />
        )
    }

    return (
        <>
            <input id={id}
                   name={name}
                   type={type || 'text'}
                   value={value}
                   onChange={onChange}
                   className={cs({
                       "form-control": true,
                       "is-invalid": !!error
                   })}
            />
            { error && <div className="invalid-feedback">{error}</div> }
        </>
    )
}