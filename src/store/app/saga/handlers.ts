import { put } from '@redux-saga/core/effects'
import { closeAppOverlayAction, openAppOverlayAction } from '../slice'

export function* openAppDrawerhandler() {
	yield put(openAppOverlayAction())
}

export function* closeAppDrawerhandler() {
	yield put(closeAppOverlayAction())
}
