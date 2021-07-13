import { takeLatest } from '@redux-saga/core/effects'
import {
	disableAppDrawerAction,
	disableAppModalAction,
	enableAppDrawerAction,
	enableAppModalAction,
	setAppErrorAction
} from '../slice'
import {
	closeAppDrawerHandler,
	openAppDrawerHandler,
	openAppModalHandler,
	closeAppModalHandler,
	appGlobalErrorHandler
} from './handlers'

export function* appWatcher() {
	yield takeLatest(enableAppDrawerAction, openAppDrawerHandler)
	yield takeLatest(disableAppDrawerAction, closeAppDrawerHandler)
	yield takeLatest(enableAppModalAction, openAppModalHandler)
	yield takeLatest(disableAppModalAction, closeAppModalHandler)
	yield takeLatest(setAppErrorAction, appGlobalErrorHandler)
}
