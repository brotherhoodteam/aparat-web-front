import { call, delay, put } from '@redux-saga/core/effects'

import { ResponseAuthType, SignInActionPayloadType } from '../interface'
import { clearStatusAction, setStatusAction } from '../../status/slice'
import { signInFailedAction, signInSuccessAction } from '../slice'
import { getErrorInfo, setAuth } from '../../../utils'
import api from '../../../core/api'
import { setAppErrorAction } from '../../app/slice'

export function* signInActionHandler({
	payload: { username, password }
}: SignInActionPayloadType) {
	// create data
	const data = {
		username,
		password
	}

	try {
		// authorization
		const { data: user }: ResponseAuthType = yield call(api.auth.login, data)

		// set user token in localstorage
		yield call(setAuth, user)

		// set user token in Redux Store
		yield put(signInSuccessAction({ user }))
	} catch (error) {
		// console.log('auth response', response)
		// console.log('auth error ', error.message, error.status)
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				signInFailedAction({
					error: { message: errorMessage, status: statusCode }
				})
			)
			yield put(setStatusAction({ message: errorMessage, status: 'warn' }))
		} else {
			// Server Error
			yield put(
				setAppErrorAction({ error: { message: errorMessage, status: statusCode } })
			)
		}
	}
}
