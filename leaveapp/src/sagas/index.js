import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga'
import applicationSaga from './applicationSaga'
import getApplicationsSaga from './getApplicationsSaga'

export default function* rootSaga() {
    yield all([loginSaga(), applicationSaga(), getApplicationsSaga()]);
}