import { takeLatest } from '@redux-saga/core/effects'
import { closeAppDrawerAction, openAppDrawerAction, setAppErrorAction } from '../slice'
import { closeAppDrawerHandler, openAppDrawerHandler, appErrorHandler } from './handlers'

export function* appDrawerWatcher() {
	yield takeLatest(openAppDrawerAction, openAppDrawerHandler)
	yield takeLatest(closeAppDrawerAction, closeAppDrawerHandler)
}
export function* errorAppDrawerWatcher() {
	yield takeLatest(setAppErrorAction, appErrorHandler)
}
