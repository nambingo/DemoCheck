import {all} from 'redux-saga/effects';
import login from './saga/login-saga'
import getHistory from "./saga/history-saga";

export default function* rootSaga() {
    yield all([login(), getHistory()])
}
