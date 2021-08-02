import {takeEvery, select, call, put, take} from 'redux-saga/effects'
import { GET_APPLICATIONS } from '../constants'
import {getApplications} from '../api/index'
import {updateUserApplications} from '../actions/index'

export const getApplicationBody = state => state['application'];

function* applicationSubmitSaga(){
    try {
        const applications = yield call(getApplications);
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
    yield take(GET_APPLICATIONS.APPLICATIONS)
    yield call(applicationSubmitSaga)
}