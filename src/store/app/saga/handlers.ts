import { put } from '@redux-saga/core/effects'
import { openAppOverlay } from '../slice'

export function* openAppDrawerhandler() {
	yield put(openAppOverlay())
}
