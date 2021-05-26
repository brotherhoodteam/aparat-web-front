import { all, call } from '@redux-saga/core/effects'
import { fileUploadWatcher } from './watchers'

function* videoSaga() {
	yield all([call(fileUploadWatcher)])
}

export default videoSaga
