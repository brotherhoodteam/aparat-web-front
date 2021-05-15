import { combineReducers } from 'redux'
import intlReducer from '../../store/intl/slice'
import userReducer from '../../store/user/slice'

const appReducer = combineReducers({
	intl: intlReducer,
	user: userReducer
})

export default appReducer
