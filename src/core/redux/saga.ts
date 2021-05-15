import { call, all } from 'redux-saga/effects'
import { userSaga } from '../../store/user/saga'

function* appSaga() {
	yield all([call(userSaga)])
}
export default appSaga
