import {all, call, fork, put, takeLatest} from 'redux-saga/effects'
import {URL_LOGIN} from "../../config/api"
import HttpService from "../../service/HttpService"
import {LoginType} from "../types";

function* requestSignIn() {
    yield takeLatest(LoginType.REQUEST_LOGIN, function* (action: any) {
        try {
            const data = yield call(HttpService.request, 'POST', URL_LOGIN, {
                "email": action.email,
                "password": action.password,
            });
            // if success save info user and put user info data to view
            yield put({
                type: LoginType.REQUEST_LOGIN_SUCCESS,
                message: ''
            })
        } catch (e) {
            yield put({
                type: LoginType.REQUEST_LOGIN_FAILED,
                message: e.message
            })
        }
    })
}


export default function* () {
    yield all([
        fork(requestSignIn),
    ])
}
