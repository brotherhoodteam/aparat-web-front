import { call, put, delay } from '@redux-saga/core/effects'
import api from 'config/api'
import {
	logoutSuccessAction,
	signInFailedAction,
	signInResetAction,
	signInSuccessAction
} from '../slice'
import { ResponseAuthType, SignInPayloadType } from '../interface'
// ! setAuth bayad check shavad
import { setAuth } from 'config/http/util'
import { appErrorHandler } from 'store/app/saga/handlers'
import { setStatusAction } from 'store/status/slice'

export function* signInActionHandler({ payload: { passport } }: SignInPayloadType) {
	try {
		const { data }: ResponseAuthType = yield call(api.auth.login, passport)
		yield call(setAuth, data)
		yield put(signInSuccessAction({ credentials: data }))
	} catch (error) {
		yield call(appErrorHandler, error, signInFailedAction, false)
		yield put(signInResetAction())
	}
}

export function* clearExpireCredentialhandler() {
	const credentials = localStorage.getItem('auth')
	if (credentials) {
		yield localStorage.removeItem('auth')
		yield put(signInResetAction())
	}
}
export function* logoutActionHandler() {
	yield delay(3000)
	yield call(clearExpireCredentialhandler)
	yield put(logoutSuccessAction())
	yield put(setStatusAction({ message: 'با موفقیت خارج شدید', status: 'success' }))
}
