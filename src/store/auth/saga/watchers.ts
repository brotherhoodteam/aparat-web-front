import { takeLatest } from '@redux-saga/core/effects'
import { logoutActionHandler, signInActionHandler } from './handlers'
import { logoutStartAction, signInAction } from '../slice'

export function* userWatcher() {
	yield takeLatest(signInAction, signInActionHandler)
	yield takeLatest(logoutStartAction, logoutActionHandler)
}
