import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga'
import applicationSaga from './applicationSaga'
import getApplicationsSaga from './getApplicationsSaga'
import SignUpSaga from './SignUpSaga'
import adminSaga from './adminSaga'

export default function* rootSaga() {
    yield all([loginSaga(), applicationSaga(), getApplicationsSaga(), SignUpSaga(), adminSaga()]);
}