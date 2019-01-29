import {all, call, fork, put, takeLatest} from 'redux-saga/effects'
import {API_GET_ITEM_BY_CODE} from "../../config/api"
import HttpService from "../../service/HttpService"
import {GetInfoItemType} from "../types";
import {database} from "../../database/Database";

function* requestInfoItem() {
    yield takeLatest(GetInfoItemType.REQUEST_INFO_ITEM, function* (action: any) {
        try {
            let url = API_GET_ITEM_BY_CODE;
            if (action.code) {
                url.concat(action.code)
            } else {
                yield put({
                    type: GetInfoItemType.REQUEST_INFO_ITEM_FAILED,
                    message: 'CODE_NULL'
                })
            }
            const data = yield call(HttpService.request, 'GET', url);
            // if success save info user and put user info data to view
            console.log("data +======" + JSON.stringify(data))
            yield put({
                type: GetInfoItemType.REQUEST_INFO_ITEM_SUCCESS,
                data: data.data
            })
            yield call(database.addHistoryItem, data.item,action.code)

        } catch (e) {
            yield put({
                type: GetInfoItemType.REQUEST_INFO_ITEM_FAILED,
                message: e.message
            })
        }
    })
}


export default function* () {
    yield all([
        fork(requestInfoItem),
    ])
}
