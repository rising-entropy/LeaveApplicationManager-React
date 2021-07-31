const initialLoginState = {login: {username: "", password: ""}}

const loginReducer = (state=initialLoginState, action) => {
    if(action.type === 'loginUsername')
    {
        let theState = state
        theState['login']['username'] = action.username
        return theState
    }
    if(action.type === 'loginPassword')
    {
        let theState = state
        theState['login']['password'] = action.password
        return theState
    }
    return state
}

export default loginReducer;