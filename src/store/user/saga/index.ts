import { all, call } from '@redux-saga/core/effects'
import { signInActionWatcher } from './watchers'

export default function* userSaga() {
	yield all([call(signInActionWatcher)])
}
