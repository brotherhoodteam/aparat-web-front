import { all, call } from '@redux-saga/core/effects'
import { signInActionWatcher } from './watchers'

export function* userSaga() {
	yield all([call(signInActionWatcher)])
}
