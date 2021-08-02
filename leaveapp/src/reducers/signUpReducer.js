const signUpReducer = (state={fName: "", lName: "", username: "", email: "", password: "", cPassword: "", company: "", position: "", department: ""}, action) => {
    if(action.type === 'signUpFName')
    {
        let theState = state
        theState['fName'] = action.fName
        return theState
    }
    if(action.type === 'signUpLName')
    {
        let theState = state
        theState['lName'] = action.lName
        return theState
    }
    if(action.type === 'signUpUsername')
    {
        let theState = state
        theState['username'] = action.username
        return theState
    }
    if(action.type === 'signUpPassword')
    {
        let theState = state
        theState['password'] = action.password
        return theState
    }
    if(action.type === 'signUpCPassword')
    {
        let theState = state
        theState['cPassword'] = action.cPassword
        return theState
    }
    if(action.type === 'signUpEmail')
    {
        let theState = state
        theState['email'] = action.email
        return theState
    }
    if(action.type === 'signUpCompany')
    {
        let theState = state
        theState['company'] = action.company
        return theState
    }
    if(action.type === 'signUpPosition')
    {
        let theState = state
        theState['position'] = action.position
        return theState
    }
    if(action.type === 'signUpDepartment')
    {
        let theState = state
        theState['department'] = action.department
        return theState
    }
    return state
}

export default signUpReducer;