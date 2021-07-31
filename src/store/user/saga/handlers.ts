import api from 'core/api'
import { call, put } from 'redux-saga/effects'
import { appError } from 'store/app/saga/handlers'
import {
	FetchUserListRequest,
	FetchUserListResponsePayload,
	FetchUserProfileResponsePayload
} from '../interface'
import {
	fetchUserListFailur,
	fetchUserListSuccess,
	fetchUserProfileFailur,
	fetchUserProfileSuccess
} from '../slice'

export function* fetchUserProfilehandler() {
	try {
		const { data }: FetchUserProfileResponsePayload = yield call(api.user.fetchProfile)
		yield put(fetchUserProfileSuccess({ data }))
	} catch (err) {
		yield call(appError, err, fetchUserProfileFailur, true)
	}
}
export function* fetchUserListhandler({ payload }: FetchUserListRequest) {
	try {
		const { data }: FetchUserListResponsePayload = yield call(
			api.user.fetchUserList,
			payload?.page,
			payload?.per_page
		)
		yield put(fetchUserListSuccess({ data }))
	} catch (err) {
		yield call(appError, err, fetchUserListFailur, true)
	}
}
