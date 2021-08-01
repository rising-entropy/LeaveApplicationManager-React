import loginReducer from './loginReducer';
import authReducer from './authReducer'
import addApplicationReducer from './addApplication'
import { combineReducers } from 'redux';

export const initialState = {auth: {isAuth: false}, login: {username: "", password: ""}, application: {leaveType: "", startDate: "", endDate: "", files: []}}

const rootReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    application: addApplicationReducer
});

export default rootReducer;