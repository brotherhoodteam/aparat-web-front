import { takeLatest } from '@redux-saga/core/effects'
import {
	disableAppDrawer,
	disableAppModal,
	enableAppDrawer,
	enableAppModal,
	openAppError
} from '../slice'
import {
	disableAppDrawerHandler,
	enableAppDrawerHandler,
	enableAppModalHandler,
	disableAppModalHandler,
	appGlobalErrorHandler
} from './handlers'

export function* appWatcher() {
	yield takeLatest(enableAppDrawer, enableAppDrawerHandler)
	yield takeLatest(disableAppDrawer, disableAppDrawerHandler)
	yield takeLatest(enableAppModal, enableAppModalHandler)
	yield takeLatest(disableAppModal, disableAppModalHandler)
	yield takeLatest(openAppError, appGlobalErrorHandler)
}
