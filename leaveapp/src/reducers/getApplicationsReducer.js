import {GET_APPLICATIONS} from '../constants/index'

const getApplicationsReducer = (state={applications: []}, action) => {
    if(action.type === GET_APPLICATIONS.UPDATE_APPLICATIONS)
    {
        let theState = state
        theState['applications'] = action.applications
        return theState
    }
    return state
}

export default getApplicationsReducer;