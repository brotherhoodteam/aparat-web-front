import { call, all } from 'redux-saga/effects'
import appSaga from 'store/app/saga'
import categoriesSaga from 'store/categories/saga'
import tagsSaga from 'store/tags/saga'
import authSaga from 'store/auth/saga'
import playlistSaga from 'store/playlists/saga'
import postSaga from 'store/post/saga'
import usersSaga from 'store/user/saga'

function* rooSaga() {
	yield all([
		call(appSaga),
		call(authSaga),
		call(postSaga),
		call(categoriesSaga),
		call(tagsSaga),
		call(playlistSaga),
		call(usersSaga)
	])
}
export default rooSaga
