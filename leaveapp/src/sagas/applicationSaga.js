import {takeEvery, select, call} from 'redux-saga/effects'
import { ADD_APPLICATION } from '../constants'
import {applicationFormSubmit} from '../api/index'

export const getApplicationBody = state => state['application'];

function* applicationSubmitSaga(){
    let body = yield select(getApplicationBody)
    body.username = localStorage.getItem("username")
    const applicationResponse = yield call(applicationFormSubmit, body)
    yield applicationResponse
}

export default function* watchApplicationSaga() {
    yield takeEvery(ADD_APPLICATION.APPLICATION_SUBMIT, applicationSubmitSaga)
}