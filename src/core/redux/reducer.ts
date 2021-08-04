import { combineReducers } from 'redux'
import intlReducer from 'store/intl/slice'
import authReducer from 'store/auth/slice'
import appReducer from 'store/app/slice'
import videoReducer from 'store/post/slice'
import categoriesReducer from 'store/categories/slice'
import tagsReducer from 'store/tags/slice'
import playlistReducer from 'store/playlists/slice'
import statusReducer from 'store/status/slice'
import usersReducer from 'store/user/slice'

const reducer = combineReducers({
	intl: intlReducer,
	auth: authReducer,
	app: appReducer,
	post: videoReducer,
	categories: categoriesReducer,
	tags: tagsReducer,
	playlists: playlistReducer,
	status: statusReducer,
	users: usersReducer
})

export default reducer
