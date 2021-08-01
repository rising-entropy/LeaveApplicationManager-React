import {ADD_APPLICATION} from '../constants/index'

const addApplicationReducer = (state={leaveType: "Sick Leave", startDate: "", endDate: "", files: []}, action) => {
    if(action.type === ADD_APPLICATION.LEAVE_TYPE)
    {
        let theState = state
        theState['leaveType'] = action.leave
        return theState
    }
    if(action.type === ADD_APPLICATION.START_DATE)
    {
        let theState = state
        theState['startDate'] = action.theDate
        return theState
    }
    if(action.type === ADD_APPLICATION.END_DATE)
    {
        let theState = state
        theState['endDate'] = action.theDate
        return theState
    }
    if(action.type === ADD_APPLICATION.FILES_UPLOAD)
    {
        let theState = state
        theState['files'] = action.files
        return theState
    }
    return state
}

export default addApplicationReducer;