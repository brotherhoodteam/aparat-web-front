import { call, all } from 'redux-saga/effects'
import appSaga from 'store/app/saga'
import categoriesSaga from 'store/categories/saga'
import statusSaga from 'store/status/saga'
import tagsSaga from 'store/tags/saga'
import authSaga from 'store/auth/saga'
import playlistSaga from 'store/playlists/saga'
import videoSaga from 'store/video/saga'

function* rooSaga() {
	yield all([
		call(appSaga),
		call(authSaga),
		call(videoSaga),
		call(categoriesSaga),
		call(tagsSaga),
		call(playlistSaga),
		call(statusSaga)
	])
}
export default rooSaga
