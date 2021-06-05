import { takeLatest } from '@redux-saga/core/effects'
import { signInActionHandler } from './handlers'
import { signInAction } from '../slice'

export function* userWatcher() {
	yield takeLatest(signInAction, signInActionHandler)
}
