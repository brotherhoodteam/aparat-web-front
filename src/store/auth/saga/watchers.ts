import { takeLatest } from '@redux-saga/core/effects'
import { logoutHandler, signInHandler } from './handlers'
import { logoutRequest, signInRequest } from '../slice'

export function* userWatcher() {
	yield takeLatest(signInRequest, signInHandler)
	yield takeLatest(logoutRequest, logoutHandler)
}
