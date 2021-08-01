const loginReducer = (state={username: "", password: ""}, action) => {
    if(action.type === 'loginUsername')
    {
        let theState = state
        theState['username'] = action.username
        return theState
    }
    if(action.type === 'loginPassword')
    {
        let theState = state
        theState['password'] = action.password
        return theState
    }
    return state
}

export default loginReducer;