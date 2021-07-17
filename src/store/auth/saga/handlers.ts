import { call, put, delay } from '@redux-saga/core/effects'
import api from 'config/api'
import { logoutSuccess, signInFailure, signInReset, signInSuccess } from '../slice'
import { SignInRequest, SignInResponsePayload } from '../interface'
// ! setAuth bayad check shavad
import { setAuth } from 'config/http/util'
import { appError } from 'store/app/saga/handlers'
import { showStatusAction } from 'store/status/slice'

export function* signInHandler({ payload: { passport } }: SignInRequest) {
	try {
		const { data }: SignInResponsePayload = yield call(api.auth.login, passport)
		yield call(setAuth, data)
		yield put(signInSuccess({ credentials: data }))
	} catch (error) {
		yield call(appError, error, signInFailure, false)
		yield put(signInReset())
	}
}

export function* clearExpireCredentialhandler() {
	const credentials = localStorage.getItem('auth')
	if (credentials) {
		yield localStorage.removeItem('auth')
		yield put(signInReset())
	}
}
export function* logoutHandler() {
	yield call(clearExpireCredentialhandler)
	yield put(logoutSuccess())
	yield put(showStatusAction({ message: 'با موفقیت خارج شدید', status: 'success' }))
}
