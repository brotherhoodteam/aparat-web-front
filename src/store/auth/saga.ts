import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import api from 'core/api'
import {
	logoutSuccess,
	signInFailure,
	signInReset,
	signInSuccess,
	logoutRequest,
	signInRequest
} from './slice'
import { SignInRequest, SignInResponsePayload } from './interface'
// ! setAuth bayad check shavad
import { setAuth } from 'core/http/util'
import { appError } from 'store/app/saga'
import { showStatusAction } from 'store/status/slice'

export function* signInHandler({ payload: { passport } }: SignInRequest) {
	try {
		const { data }: SignInResponsePayload = yield call(api.auth.login, passport)
		yield call(setAuth, data)
		yield put(signInSuccess({ credentials: data }))
	} catch (error) {
		yield call(appError, error, signInFailure, true)
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

function* authWatcher() {
	yield takeLatest(signInRequest, signInHandler)
	yield takeLatest(logoutRequest, logoutHandler)
}
function* userSaga() {
	yield all([call(authWatcher)])
}

export default userSaga
