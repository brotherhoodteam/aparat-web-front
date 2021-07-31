import { put } from '@redux-saga/core/effects'
import { call } from 'redux-saga/effects'
import { getErrorInfo } from 'lib/utils'
import { showStatusAction } from 'store/status/slice'
import { clearExpireCredentialhandler } from 'store/auth/saga/handlers'
import { AppErrorPayload } from '../interface'
import { disableAppOverlay, enableAppOverlay, openAppError } from '../slice'

export function* enableAppDrawerHandler() {
	yield put(enableAppOverlay())
}

export function* disableAppDrawerHandler() {
	yield put(disableAppOverlay())
}

export function* enableAppModalHandler() {
	yield put(enableAppOverlay())
}

export function* disableAppModalHandler() {
	yield put(disableAppOverlay())
}

export function* appGlobalErrorHandler(action: AppErrorPayload) {
	yield put(showStatusAction({ message: action.payload.error.message, status: 'error' }))
}

export function* appError(error: any, hanlder: (payload: any) => any, toster: boolean) {
	const { errorMessage: message, statusCode: status } = getErrorInfo(error)
	if (status && status === 401) {
		yield call(clearExpireCredentialhandler)
		yield put(hanlder({ error: { message, status } }))
		if (toster) {
			yield put(
				showStatusAction({ message: 'اطلاعات وارد شده صحیح نمیباشد', status: 'warn' })
			)
		}
	} else if (status && status < 500) {
		yield put(hanlder({ error: { message, status } }))
		if (toster) {
			yield put(showStatusAction({ message: message, status: 'warn' }))
		}
	} else {
		yield put(openAppError({ error: { message, status } }))
	}
}
