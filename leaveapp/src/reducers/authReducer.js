import {initialState} from './index'

const authReducer = (state=initialState, action) => {
    if(action.type === 'authLogin')
    {
        let theState = state
        theState['auth']['isAuth'] = true
        return theState
    }
    if(action.type === 'authLogout')
    {
        let theState = state
        theState['auth']['isAuth'] = false
        return theState
    }
    return state
}

export default authReducer;