import { call, all } from 'redux-saga/effects'
import appSaga from '../../store/app/saga'
import catrgoriesSaga from '../../store/categories/saga'
import userSaga from '../../store/user/saga'
import videoSaga from '../../store/video/saga'

function* rooSaga() {
	yield all([call(appSaga), call(userSaga), call(videoSaga), call(catrgoriesSaga)])
}
export default rooSaga
