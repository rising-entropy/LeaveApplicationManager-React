const authReducer = (state={isAuth: false}, action) => {
    if(action.type === 'authLogin')
    {
        let theState = state
        theState['isAuth'] = true
        return theState
    }
    if(action.type === 'authLogout')
    {
        let theState = state
        theState['isAuth'] = false
        return theState
    }
    return state
}

export default authReducer;