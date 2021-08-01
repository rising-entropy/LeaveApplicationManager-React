import {takeEvery, select, call} from 'redux-saga/effects'
import { LOGIN } from '../constants'
import {loginSubmit} from '../api/index'

export const getLoginBody = state => state['login'];

function* loginSubmitSaga(){
    try {
        let body = yield select(getLoginBody)
        body = body['login']
        const loginResponse = yield call(loginSubmit, body)
        yield loginResponse
        // const images = yield call(fetchImages, page);
        // yield put(setImages(images));
    } catch (error) {
        // yield put(setError(error.toString()));
        console.log(error.toString())
        console.log("stupid error")
    }
}

//watching for that type LOGIN_LOGIN, if it comes up -> loginSubmit() would work then
export default function* watchLoginSaga() {
    yield takeEvery(LOGIN.LOGIN, loginSubmitSaga)
}