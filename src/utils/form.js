import {HttpValidationErrors} from "../services/base";

const FORM_ACTION_CHANGE_FIELD = 'FORM_ACTION_CHANGE_FIELD'
const FORM_ACTION_SUBMIT_REQUEST = 'FORM_ACTION_SUBMIT_REQUEST'
const FORM_ACTION_SUBMIT_SUCCESS = 'FORM_ACTION_SUBMIT_SUCCESS'
const FORM_ACTION_SUBMIT_ERRORS = 'FORM_ACTION_SUBMIT_ERRORS'
const FORM_ACTION_SUBMIT_FAILED = 'FORM_ACTION_SUBMIT_FAILED'

export const createFormState = (fields) => {
    return {
        isSubmitting: false,
        fields: {...fields},
        error: null,
        errors: {},
        initialValues: {...fields}
    };
}

export const createFormReducer = (formId) => (state, action) => {
    switch (action.type) {
        case formId+"."+FORM_ACTION_CHANGE_FIELD: {
            const { name, value } = action.payload;
            return {
                ...state,
                fields: {...state.fields, [name]: value}
            };
        }
        case formId+"."+FORM_ACTION_SUBMIT_REQUEST: {
            return {
                ...state,
                isSubmitting: true,
            };
        }
        case formId+"."+FORM_ACTION_SUBMIT_SUCCESS: {
            const { reset } = action.payload;
            const nextState = {
                ...state,
                isSubmitting: false,
                error: null,
                errors: {}
            };
            if(reset === true) {
                nextState.fields = {...nextState.initialValues};
            }
            return nextState;
        }
        case formId+"."+FORM_ACTION_SUBMIT_ERRORS: {
            const { errors } = action.payload;
            return {
                ...state,
                errors: {...errors},
                isSubmitting: false,
            };
        }
        case formId+"."+FORM_ACTION_SUBMIT_FAILED: {
            const { error } = action.payload;
            return {
                ...state,
                error,
                isSubmitting: false,
            };
        }
        default: {
            return state;
        }
    }
}

export const formChangeField = (formId, {name, value}) => ({
    type: formId+"."+FORM_ACTION_CHANGE_FIELD,
    payload: { name, value }
});
export const formSubmitRequest = (formId) => ({
    type: formId+"."+FORM_ACTION_SUBMIT_REQUEST,
    payload: { }
});
export const formSubmitSuccess = (formId, {reset} = {reset: false}) => ({
    type: formId+"."+FORM_ACTION_SUBMIT_SUCCESS,
    payload: {reset}
});
export const formSubmitErrors = (formId, {errors}) => ({
    type: formId+"."+FORM_ACTION_SUBMIT_ERRORS,
    payload: {errors}
});
export const formSubmitFailed = (formId, {error}) => ({
    type: formId+"."+FORM_ACTION_SUBMIT_FAILED,
    payload: {error}
});

export const handleFormSubmitAsync = async (store, formId, handler, {reset} = {reset: true}) => {
    let result;

    store.dispatch(formSubmitRequest(formId))
    try {
        result = await handler()
        store.dispatch(formSubmitSuccess(formId, { reset }))
    } catch (err) {
        result = err
        if(err instanceof HttpValidationErrors) {
            store.dispatch(formSubmitErrors(formId, {errors: err.errors}))
        } else {
            store.dispatch(formSubmitFailed(formId, {error: err.message}))
        }
    }

    return result;
}
export const handleFormFieldChange = ({dispatch}, formId, {name, value}) => {
    dispatch(formChangeField(formId, { name, value }))
}

export const getFormState = (state, key) => state && state[key] ? state[key] : null;