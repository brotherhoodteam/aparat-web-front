import { combineReducers } from 'redux'
import intlReducer from '../../store/intl/slice'

const appReducer = combineReducers({
	intl: intlReducer
})

export default appReducer
