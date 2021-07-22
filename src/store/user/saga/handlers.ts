import api from 'config/api'
import { call, put } from 'redux-saga/effects'
import { appError } from 'store/app/saga/handlers'
import { FetchUserProfileResponsePayload } from '../interface'
import { fetchUserProfileFailur, fetchUserProfileSuccess } from '../slice'

export function* fetchUserProfilehandler() {
	try {
		const { data }: FetchUserProfileResponsePayload = yield call(api.user.fetchProfile)
		yield put(fetchUserProfileSuccess({ user: data }))
	} catch (err) {
		yield call(appError, err, fetchUserProfileFailur, true)
	}
}
