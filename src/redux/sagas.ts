import {all} from 'redux-saga/effects';
import login from './saga/login-saga'

export default function* rootSaga() {
    yield all([login()])
}
