import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga'
import applicationSaga from './applicationSaga'

export default function* rootSaga() {
    yield all([loginSaga(), applicationSaga()]);
}