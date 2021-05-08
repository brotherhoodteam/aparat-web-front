import { combineReducers } from 'redux'
import intlReducer from './intl/intl.slice'

const rootReducer = combineReducers({
	intl: intlReducer
})

export default rootReducer
