import { all, call } from '@redux-saga/core/effects'
import { closeAppDrawerWatcher, openAppDrawerWatcher } from './watchers'

function* appSaga() {
	yield all([call(openAppDrawerWatcher), call(closeAppDrawerWatcher)])
}

export default appSaga
