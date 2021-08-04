import api from 'core/api'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { appError } from 'store/app/saga'
import {
	FetchUserListRequest,
	FetchUserListResponsePayload,
	FetchUserProfileResponsePayload
} from './types'
import {
	fetchUserListFailur,
	fetchUserListRequest,
	fetchUserListSuccess,
	fetchUserProfileFailur,
	fetchUserProfileRequest,
	fetchUserProfileSuccess
} from './slice'

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

function* usersWatchers() {
	yield takeLatest(fetchUserProfileRequest, fetchUserProfilehandler)
	yield takeLatest(fetchUserListRequest, fetchUserListhandler)
}

function* usersSaga() {
	yield all([call(usersWatchers)])
}

export default usersSaga
