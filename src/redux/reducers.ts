import {combineReducers} from 'redux'
import loginReducer from './reducers/LoginReducer'

const rootReducers = combineReducers({loginReducer})
export default rootReducers
