import { all, call } from '@redux-saga/core/effects'
import { openAppDrawerWatcher } from './watchers'

function* appSaga() {
	yield all([call(openAppDrawerWatcher)])
}

export default appSaga
