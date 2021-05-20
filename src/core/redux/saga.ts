import { call, all } from 'redux-saga/effects'
import appSaga from '../../store/app/saga'
import userSaga from '../../store/user/saga'

function* rooSaga() {
	yield all([call(appSaga), call(userSaga)])
}
export default rooSaga
