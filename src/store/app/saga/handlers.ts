import { put } from '@redux-saga/core/effects'
import { closeAppOverlay, openAppOverlay } from '../slice'

export function* openAppDrawerhandler() {
	yield put(openAppOverlay())
}

export function* closeAppDrawerhandler() {
	yield put(closeAppOverlay())
}
