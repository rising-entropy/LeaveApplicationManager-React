import loginReducer from '../reducers/loginReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    login: loginReducer
});

export default rootReducer;