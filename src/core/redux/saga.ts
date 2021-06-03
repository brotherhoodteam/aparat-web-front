import { call, all } from 'redux-saga/effects'
import appSaga from '../../store/app/saga'
import categoriesSaga from '../../store/categories/saga'
import statusSaga from '../../store/status/saga'
import tagsSaga from '../../store/tags/saga'
import userSaga from '../../store/user/saga'
import videoSaga from '../../store/video/saga'

function* rooSaga() {
	yield all([
		call(appSaga),
		call(userSaga),
		call(videoSaga),
		call(categoriesSaga),
		call(tagsSaga),
		call(statusSaga)
	])
}
export default rooSaga
