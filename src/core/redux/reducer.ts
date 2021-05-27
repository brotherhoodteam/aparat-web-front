import { combineReducers } from 'redux'
import intlReducer from '../../store/intl/slice'
import userReducer from '../../store/user/slice'
import appReducer from '../../store/app/slice'
import videoReducer from '../../store/video/slice'
import categoryReducer from '../../store/category/slice'

const reducer = combineReducers({
	intl: intlReducer,
	user: userReducer,
	app: appReducer,
	video: videoReducer,
	category: categoryReducer
})

export default reducer
