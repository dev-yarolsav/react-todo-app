import React from "react";
import {useSelector} from "react-redux";

import {getAppSignupForm} from "../../store/app/selectors";

import {handleSignupFormChange, handleSignupFormSubmit} from "store/app/handlers";
import BaseFormInput from "../base/form/BaseFormInput";
import BaseButton from "../base/BaseButton";
import BaseForm from "../base/form/BaseForm";
import {Link} from "react-router-dom";
import {LoginPath} from "../../routes";

export default function AppLoginForm () {
    const {isSubmitting, error, fields, errors} = useSelector(getAppSignupForm);

    return (
        <BaseForm handleSubmit={handleSignupFormSubmit}>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <BaseFormInput id="name" name="name" value={fields.name}
                               error={errors.name}
                               handleChange={handleSignupFormChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <BaseFormInput id="username" name="username" value={fields.username}
                               error={errors.username}
                               handleChange={handleSignupFormChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <BaseFormInput id="password" name="password" value={fields.password}
                               error={errors.password}
                               handleChange={handleSignupFormChange}/>
            </div>

            {error && <div className="text-danger">{error}</div>}
            <div className="text-right">
                <Link className="btn btn-link" to={LoginPath()}>Login</Link>
                <BaseButton isLoading={isSubmitting} type="submit" label="Signup" styleName="primary"/>
            </div>
        </BaseForm>
    )
}