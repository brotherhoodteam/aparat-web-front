import { all, call } from '@redux-saga/core/effects'
import { userWatcher } from './watchers'

export default function* userSaga() {
	yield all([call(userWatcher)])
}
