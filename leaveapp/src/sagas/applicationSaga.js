import {takeEvery, select, call} from 'redux-saga/effects'
import { ADD_APPLICATION } from '../constants'
import {loginSubmit} from '../api/index'

function* applicationSubmitSaga(){
    console.log("Hello")
}

export default function* watchApplicationSaga() {
    yield takeEvery(ADD_APPLICATION.APPLICATION_SUBMIT, applicationSubmitSaga)
}