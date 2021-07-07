import { takeLatest } from '@redux-saga/core/effects'
import {
	closeAppDrawerAction,
	closeAppModalAction,
	openAppDrawerAction,
	openAppModalAction,
	setAppErrorAction
} from '../slice'
import {
	closeAppDrawerHandler,
	openAppDrawerHandler,
	appErrorHandler,
	openAppModalHandler,
	closeAppModalHandler
} from './handlers'

export function* appWatcher() {
	yield takeLatest(openAppDrawerAction, openAppDrawerHandler)
	yield takeLatest(closeAppDrawerAction, closeAppDrawerHandler)
	yield takeLatest(openAppModalAction, openAppModalHandler)
	yield takeLatest(closeAppModalAction, closeAppModalHandler)
	yield takeLatest(setAppErrorAction, appErrorHandler)
}
