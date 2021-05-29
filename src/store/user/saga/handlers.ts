import { call, delay, put } from '@redux-saga/core/effects'

import { ResponseAuthType, SignInActionPayloadType } from '../interface'
import { signInFailedAction, signInReinitAction, signInSuccessAction } from '../slice'
import api from '../../../core/api'
import { setAuth } from '../../../utils'
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
		const { message, response } = error
		if (response && response.status) {
			// set user signin Error in Redux Store
			yield put(
				signInFailedAction({
					error: {
						message,
						status: response.status
					}
				})
			)
		} else {
			// set app Error in Redux Store
			yield put(
				setAppErrorAction({
					error: {
						message,
						status: error.status
					}
				})
			)
			yield delay(5000)
			yield put(signInReinitAction())
		}
	}
}
