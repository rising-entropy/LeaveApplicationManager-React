import {createStore} from 'redux'

const initialState = {login: {username: "", password: ""}}

const loginReducer = (state=initialState, action) => {
    if(action.type === 'loginUsername')
    {
        let theState = state
        theState['login']['username'] = action.username
        console.log(state)
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

const store = createStore(loginReducer)

export default store;