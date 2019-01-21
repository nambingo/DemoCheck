import {LoginType} from '../types'

export function requestLogin(email: string, password: string) {
    return {
        type: LoginType.REQUEST_LOGIN,
        email,
        password
    }
}