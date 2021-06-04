import { all, call } from '@redux-saga/core/effects'
import { appDrawerWatcher, errorAppDrawerWatcher } from './watchers'

function* appSaga() {
	yield all([call(errorAppDrawerWatcher), call(appDrawerWatcher)])
}

export default appSaga
