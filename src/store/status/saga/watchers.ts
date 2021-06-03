import { takeLatest } from '@redux-saga/core/effects'
import { setStatusAction } from '../slice'
import { statusHandler } from './handler'

export function* statusWatcher() {
	yield takeLatest(setStatusAction, statusHandler)
}
