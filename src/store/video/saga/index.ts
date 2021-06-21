import { all, call } from '@redux-saga/core/effects'
import { uploadWatcher } from './watchers'

function* videoSaga() {
	yield all([call(uploadWatcher)])
}

export default videoSaga
