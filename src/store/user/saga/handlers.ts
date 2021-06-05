import { call, put } from '@redux-saga/core/effects'

import api from '../../../core/api'
import { setStatusAction } from '../../status/slice'
import { signInFailedAction, signInSuccessAction } from '../slice'
import { setAppErrorAction } from '../../app/slice'
import { ResponseAuthType, SignInPayloadType } from '../interface'
import { getErrorInfo, setAuth } from '../../../utils'

export function* signInActionHandler({ payload: { user } }: SignInPayloadType) {
	// create data
	try {
		// authorization
		const { data }: ResponseAuthType = yield call(api.auth.login, user)

		// set user token in localstorage
		yield call(setAuth, data)

		// set user token in Redux Store
		yield put(signInSuccessAction({ credentials: data }))
	} catch (error) {
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
