import { takeLatest } from '@redux-saga/core/effects'
import { closeAppDrawerAction, openAppDrawerAction } from '../slice'
import { closeAppDrawerhandler, openAppDrawerhandler } from './handlers'

export function* openAppDrawerWatcher() {
	yield takeLatest(openAppDrawerAction, openAppDrawerhandler)
}

export function* closeAppDrawerWatcher() {
	yield takeLatest(closeAppDrawerAction, closeAppDrawerhandler)
}
