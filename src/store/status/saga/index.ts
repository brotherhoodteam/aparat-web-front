import { all, call } from '@redux-saga/core/effects'
import { statusWatcher } from './watchers'

export default function* statusSaga() {
	yield all([call(statusWatcher)])
}
