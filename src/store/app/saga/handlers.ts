import { put } from '@redux-saga/core/effects'
import { setStatusAction } from '../../status/slice'
import { AppErrorPayloadType } from '../interface'
import { closeAppOverlayAction, openAppOverlayAction } from '../slice'

export function* openAppDrawerHandler() {
	yield put(openAppOverlayAction())
}

export function* closeAppDrawerHandler() {
	yield put(closeAppOverlayAction())
}

export function* openAppModalHandler() {
	yield put(openAppOverlayAction())
}

export function* closeAppModalHandler() {
	yield put(closeAppOverlayAction())
}
export function* appErrorHandler({ payload: { error } }: AppErrorPayloadType) {
	yield put(setStatusAction({ message: error.message, status: 'error' }))
}
