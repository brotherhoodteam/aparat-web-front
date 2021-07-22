import { takeLatest } from '@redux-saga/core/effects'
import { logoutHandler, signInHandler } from './handlers'
import { logoutRequest, signInRequest } from '../slice'

export function* authWatcher() {
	yield takeLatest(signInRequest, signInHandler)
	yield takeLatest(logoutRequest, logoutHandler)
}
