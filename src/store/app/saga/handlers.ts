import { put } from '@redux-saga/core/effects'
import { call } from 'redux-saga/effects'
import { getErrorInfo } from 'core/utils'
import { setStatusAction } from 'store/status/slice'
import { clearExpireCredentialhandler } from 'store/auth/saga/handlers'
import { AppErrorPayloadType } from '../interface'
import {
	disableAppOverlayAction,
	enableAppOverlayAction,
	setAppErrorAction
} from '../slice'

export function* openAppDrawerHandler() {
	yield put(enableAppOverlayAction())
}

export function* closeAppDrawerHandler() {
	yield put(disableAppOverlayAction())
}

export function* openAppModalHandler() {
	yield put(enableAppOverlayAction())
}

export function* closeAppModalHandler() {
	yield put(disableAppOverlayAction())
}

export function* appGlobalErrorHandler(action: AppErrorPayloadType) {
	yield put(setStatusAction({ message: action.payload.error.message, status: 'error' }))
}

export function* appErrorHandler(
	error: any,
	hanlder: (payload: any) => any,
	toster: boolean
) {
	const { errorMessage: message, statusCode: status } = getErrorInfo(error)
	if (status && status === 401) {
		yield call(clearExpireCredentialhandler)
		yield put(hanlder({ error: { message, status } }))
	} else if (status && status < 500) {
		yield put(hanlder({ error: { message, status } }))
		if (toster) {
			yield put(setStatusAction({ message: message, status: 'warn' }))
		}
	} else {
		yield put(setAppErrorAction({ error: { message, status } }))
	}
}
