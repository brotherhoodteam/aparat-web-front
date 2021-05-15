import { call, put } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { ResponseUserType, SignInActionPayloadType } from '../interface'
import { signInAction, signInFailedAction, signInSuccessAction } from '../slice'
import api from '../../../core/api'
import { setAuth } from '../../../utils'

export function* signInActionHandler({
	payload: { username, password }
}: PayloadAction<SignInActionPayloadType>) {
	const data = {
		username,
		password
	}
	put(signInAction(data))
	try {
		const { data: user }: ResponseUserType = yield call(api.auth.login, data)
		// set user token in localstorage
		yield call(setAuth, user)
		// set user token in Redux Store
		yield put(signInSuccessAction({ user }))
	} catch (error) {
		if (error.response && error.status === 401) {
			put(signInFailedAction(error))
		} else {
			console.log('هر خطایی')
		}
	}
}
