import { takeLatest } from '@redux-saga/core/effects'
import { closeAppDrawer, openAppDrawer } from '../slice'
import { closeAppDrawerhandler, openAppDrawerhandler } from './handlers'

export function* openAppDrawerWatcher() {
	yield takeLatest(openAppDrawer, openAppDrawerhandler)
}

export function* closeAppDrawerWatcher() {
	yield takeLatest(closeAppDrawer, closeAppDrawerhandler)
}
