import {combineReducers} from 'redux'
import login from './reducers/LoginReducer'
import history from './reducers/HistoryReducer'

const rootReducers = combineReducers({
    login,
    history
})
export default rootReducers
