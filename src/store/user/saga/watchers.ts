import { takeLatest } from '@redux-saga/core/effects'
import { signInActionHandler } from './handlers'
import { signInAction } from '../slice'

export function* signInActionWatcher() {
	yield takeLatest(signInAction, signInActionHandler)
}
