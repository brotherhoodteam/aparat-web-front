import api from 'core/api/config'
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

export function* fetchUserProfile() {
	try {
		const { data }: FetchUserProfileResponsePayload = yield call(api.user.fetchProfile)
		yield put(fetchUserProfileSuccess({ data }))
	} catch (err) {
		yield call(appError, err, fetchUserProfileFailur, true)
	}
}
export function* fetchUserList({ payload }: FetchUserListRequest) {
	try {
		const { data }: FetchUserListResponsePayload = yield call(
			api.user.fetchUserList,
			payload?.page,
			payload?.per_page
		)
		yield put(fetchUserListSuccess({ data }))
	} catch (error) {
		yield call(appError, error, fetchUserListFailur, true)
	}
}

export function* fetchFollowerUsers() {
	try {
		const { data } = yield call(api.user.fetchFollowerUsers)
	} catch (error) {
		yield call(appError, error, fetchUserListFailur, true)
	}
}

export function* fetchFollowingUsers() {
	try {
		const { data } = yield call(api.user.fetchFollowingUsers)
	} catch (error) {
		yield call(appError, error, fetchUserListFailur, true)
	}
}

function* usersWatchers() {
	yield takeLatest(fetchUserProfileRequest, fetchUserProfile)
	yield takeLatest(fetchUserListRequest, fetchUserList)
}

function* usersSaga() {
	yield all([call(usersWatchers)])
}

export default usersSaga
