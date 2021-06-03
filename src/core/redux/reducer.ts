import { combineReducers } from 'redux'
import intlReducer from '../../store/intl/slice'
import userReducer from '../../store/user/slice'
import appReducer from '../../store/app/slice'
import videoReducer from '../../store/video/slice'
import categoriesReducer from '../../store/categories/slice'
import tagsReducer from '../../store/tags/slice'
import tagsStatus from '../../store/status/slice'

const reducer = combineReducers({
	intl: intlReducer,
	user: userReducer,
	app: appReducer,
	video: videoReducer,
	categories: categoriesReducer,
	tags: tagsReducer,
	status: tagsStatus
})

export default reducer
