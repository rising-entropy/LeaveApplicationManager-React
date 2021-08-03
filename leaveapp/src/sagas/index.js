import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga'
import applicationSaga from './applicationSaga'
import getApplicationsSaga from './getApplicationsSaga'
import SignUpSaga from './SignUpSaga'

export default function* rootSaga() {
    yield all([loginSaga(), applicationSaga(), getApplicationsSaga(), SignUpSaga()]);
}