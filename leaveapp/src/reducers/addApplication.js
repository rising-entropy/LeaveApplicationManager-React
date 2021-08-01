import {initialState} from './index'
import {ADD_APPLICATION} from '../constants/index'

const addApplicationReducer = (state=initialState, action) => {
    if(action.type === ADD_APPLICATION.LEAVE_TYPE)
    {
        let theState = state
        theState['application']['leaveType'] = action.leave
        return theState
    }
    if(action.type === ADD_APPLICATION.START_DATE)
    {
        let theState = state
        theState['application']['startDate'] = action.theDate
        return theState
    }
    if(action.type === ADD_APPLICATION.END_DATE)
    {
        let theState = state
        theState['application']['endDate'] = action.theDate
        return theState
    }
    if(action.type === ADD_APPLICATION.FILES_UPLOAD)
    {
        let theState = state
        theState['application']['files'] = action.files
        return theState
    }
    return state
}

export default addApplicationReducer;