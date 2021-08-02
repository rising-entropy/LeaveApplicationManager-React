import {LOGIN, ADD_APPLICATION, GET_APPLICATIONS} from '../constants/index'

export const loginFormSubmit = () => ({
    type: LOGIN.LOGIN,
});

export const addApplicationForm = () => ({
    type: ADD_APPLICATION.APPLICATION_SUBMIT
})

export const getUserApplications = () => ({
    type: GET_APPLICATIONS.APPLICATIONS
})

export const updateUserApplications = (applications) => ({
    type: GET_APPLICATIONS.UPDATE_APPLICATIONS,
    applications
})