import { all, call } from '@redux-saga/core/effects'
import { authWatcher } from './watchers'

export default function* userSaga() {
	yield all([call(authWatcher)])
}
