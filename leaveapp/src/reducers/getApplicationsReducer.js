import {GET_APPLICATIONS} from '../constants/index'

const getApplicationsReducer = (state={applications: []}, action) => {
    if(action.type === GET_APPLICATIONS.UPDATE_APPLICATIONS)
    {
        return {applications: [...state.applications, ...action.applications]};
    }
    return state
}

export default getApplicationsReducer;