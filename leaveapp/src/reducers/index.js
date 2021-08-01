import loginReducer from './loginReducer';
import authReducer from './authReducer'
import addApplicationReducer from './addApplication'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    application: addApplicationReducer
});

export default rootReducer;