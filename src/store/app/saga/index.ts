import { all, call } from '@redux-saga/core/effects'
import { appWatcher } from './watchers'

function* appSaga() {
	yield all([call(appWatcher)])
}

export default appSaga
