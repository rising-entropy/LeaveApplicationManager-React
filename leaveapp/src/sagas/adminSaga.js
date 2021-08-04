import {call, put, take} from 'redux-saga/effects'
import { ADMIN } from '../constants'
import {getAdminApplications} from '../api/index'

// export const getApplicationBody = state => state['application'];

function* applicationSubmitSaga(){
    try {
        const applications = yield call(getAdminApplications);
        //yield put(updateUserApplications(applications));
        //console.log(applications)
        yield applications
    } catch (error) {
        alert("Cannot retrieve your applications. Please try again later.")
        window.location = '/'
        return 0;
    }
}

export default function* watchApplicationSaga() {
    yield take(ADMIN.APPLICATIONS)
    yield call(applicationSubmitSaga)
}