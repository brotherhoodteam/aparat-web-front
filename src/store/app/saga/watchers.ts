import { takeLatest } from '@redux-saga/core/effects'
import { closeAppDrawerAction, openAppDrawerAction, setAppErrorAction } from '../slice'
import { closeAppDrawerHandler, openAppDrawerHandler, appErrorHandler } from './handlers'

export function* appWatcher() {
	yield takeLatest(openAppDrawerAction, openAppDrawerHandler)
	yield takeLatest(closeAppDrawerAction, closeAppDrawerHandler)
	yield takeLatest(setAppErrorAction, appErrorHandler)
}
