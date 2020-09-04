import React from "react";
import {useSelector} from "react-redux";

import {getAppLoginForm} from "../../store/app/selectors";

import {handleLoginFormChange, handleLoginFormSubmit} from "../../store/app/handlers";
import BaseFormInput from "../base/form/BaseFormInput";
import BaseButton from "../base/BaseButton";
import BaseForm from "../base/form/BaseForm";

export default function AppLoginForm () {
    const {isSubmitting, error, fields, errors} = useSelector(getAppLoginForm);

    return (
        <BaseForm handleSubmit={handleLoginFormSubmit}>
            <div className="form-group">
                <label htmlFor="login">Login</label>
                <BaseFormInput id="login" name="login" value={fields.login}
                               error={errors.login}
                               handleChange={handleLoginFormChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <BaseFormInput id="password" name="password" value={fields.password}
                               error={errors.password}
                               handleChange={handleLoginFormChange}/>
            </div>
            <div className="form-group form-check">
                <BaseFormInput name="rememberMe" value={fields.rememberMe}
                               id="rememberMe" type="checkbox"
                               handleChange={handleLoginFormChange}/>
                <label className="form-check-label" htmlFor="rememberMe">Remember me?</label>
            </div>
            {error && <div className="text-danger">{error}</div>}
            <div className="text-right">
                <BaseButton isLoading={isSubmitting} type="submit" label="Login" styleName="primary"/>
            </div>
        </BaseForm>
    )
}