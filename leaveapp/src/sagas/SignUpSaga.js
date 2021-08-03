import {takeEvery, select, call, take} from 'redux-saga/effects'
import { SIGNUP } from '../constants'
import {signUpSubmit} from '../api/index'

export const getSignUpBody = state => state['signUp'];

function* signUpSubmitSaga(){
    try {
        let body = yield select(getSignUpBody)
        console.log(body)
        const signUpResponse = yield call(signUpSubmit, body)
        yield signUpResponse
    } catch (error) {
        // yield put(setError(error.toString()));
        console.log(error.toString())
        console.log("stupid error")
    }
}

//watching for that type LOGIN_LOGIN, if it comes up -> loginSubmit() would work then
export default function* watchSignUpSaga(action) {
    yield take(SIGNUP.SIGNUP)
    yield call(signUpSubmitSaga)
}