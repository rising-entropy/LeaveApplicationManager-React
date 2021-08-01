import {LOGIN, ADD_APPLICATION} from '../constants/index'

export const loginFormSubmit = () => ({
    type: LOGIN.LOGIN,
});

export const addApplicationForm = () => ({
    type: ADD_APPLICATION.APPLICATION_SUBMIT
})