import {all, call, fork, put, takeLatest} from 'redux-saga/effects'
import {URL_LOGIN} from "../../config/api"
import HttpService from "../../service/HttpService"
import {HistoryType, LoginType} from "../types";

const data_mock = [
    {
        name: 'xxx',
        code: 12213,
        nhaxs: 'nhasx',
        thoigian: '12-12-2015 12:23:12',
        image: require("../images/ic_menu.png")
    },
    {
        name: 'xxx',
        code: 12213,
        nhaxs: 'nhasx',
        thoigian: '12-12-2015 12:23:12',
        image: require("../images/ic_menu.png")
    }, {
        name: 'xxx',
        code: 12213,
        nhaxs: 'nhasx',
        thoigian: '12-12-2015 12:23:12',
        image: require("../images/ic_menu.png")
    }
]

function* getHistory() {
    console.log("xxxxxxxxxxxxx")

    yield takeLatest(HistoryType.REQUEST_HISTORY, function* (action: any) {
        try {
            // if success save info user and put user info data to view
            yield put({
                type: HistoryType.REQUEST_HISTORY_SUCCESS,
                message: '',
                data: data_mock
            })
        } catch (e) {
            yield put({
                type: HistoryType.REQUEST_HISTORY_FAILED,
                message: e.message
            })
        }
    })
}


export default function* () {
    yield all([
        fork(getHistory),
    ])
}
