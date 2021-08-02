import loginReducer from './loginReducer';
import authReducer from './authReducer'
import addApplicationReducer from './addApplication'
import { combineReducers } from 'redux';
import getApplicationsReducer from './getApplicationsReducer'
import signUpReducer from './signUpReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    application: addApplicationReducer,
    getApplications: getApplicationsReducer,
    signUp: signUpReducer
});

export default rootReducer;