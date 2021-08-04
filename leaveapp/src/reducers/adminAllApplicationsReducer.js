import {ADMIN} from '../constants/index'

const getApplicationsReducer = (state={applications: []}, action) => {
    if(action.type === ADMIN.UPDATE_APPLICATIONS)
    {
        return {applications: [...state.applications, ...action.applications]};
    }
    return state
}

export default getApplicationsReducer;