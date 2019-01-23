import {LoginType} from '../types'

const initState = {
    loading: false,
    data: '',
    email: '',
    password: '',
    message: ''
}
export default function (state = initState, action: any) {
    switch (action.type) {
        case LoginType.REQUEST_LOGIN :
            return Object.assign({}, state, {
                loading: true,
                email: action.email,
                password: action.password,
            })
        case  LoginType.REQUEST_LOGIN_SUCCESS :
            return Object.assign({}, state, {
                loading: false,
                data: action.data,
                message: action.message,
            })
        case LoginType.REQUEST_LOGIN_FAILED :
            return Object.assign({}, state, {
                loading: false,
                data: action.data,
                message: action.message
            })
        default :
            return state
    }
}