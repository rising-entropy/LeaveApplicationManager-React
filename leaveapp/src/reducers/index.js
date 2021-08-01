import loginReducer from '../reducers/loginReducer';
import authReducer from '../reducers/authReducer'
import { combineReducers } from 'redux';

export const initialState = {auth: {isAuth: false}, login: {username: "", password: ""}}

const rootReducer = combineReducers({
    login: loginReducer,
    auth: authReducer
});

export default rootReducer;