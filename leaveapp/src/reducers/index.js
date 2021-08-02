import loginReducer from './loginReducer';
import authReducer from './authReducer'
import addApplicationReducer from './addApplication'
import { combineReducers } from 'redux';
import getApplicationsReducer from './getApplicationsReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    application: addApplicationReducer,
    getApplications: getApplicationsReducer
});

export default rootReducer;