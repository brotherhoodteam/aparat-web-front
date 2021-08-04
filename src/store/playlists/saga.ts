import { call, put, takeLatest } from '@redux-saga/core/effects'

import api from 'core/api'
import {
	CreatePlaylistRequest,
	CreatePlaylistResponsePayload,
	FetchPlaylistListResponsePayload
} from './types'
import {
	fetchPlaylistListSuccess,
	fetchPlaylistListFailure,
	createPlaylistSuccess,
	createPlaylistFailure,
	createPlaylistRequest,
	fetchPlaylistListRequest
} from './slice'
import { showStatusAction } from 'store/status/slice'
import { appError } from 'store/app/saga'
import { all } from 'redux-saga/effects'

export function* fetchPlaylistListHandler() {
	try {
		const { data }: FetchPlaylistListResponsePayload = yield call(api.playlists.get)
		yield put(fetchPlaylistListSuccess({ playlistList: data }))
	} catch (error) {
		yield call(appError, error, fetchPlaylistListFailure, true)
	}
}

export function* createPlaylistHandler({ payload: { playlist } }: CreatePlaylistRequest) {
	try {
		const { data }: CreatePlaylistResponsePayload = yield call(
			api.playlists.set,
			playlist
		)
		yield put(createPlaylistSuccess({ playlist: data }))
		yield put(
			showStatusAction({ status: 'success', message: 'لیست پخش جدید باموفقیت اضافه شد' })
		)
	} catch (error) {
		yield call(appError, error, createPlaylistFailure, true)
	}
}

export function* playlistsWatcher() {
	yield takeLatest(fetchPlaylistListRequest, fetchPlaylistListHandler)
	yield takeLatest(createPlaylistRequest, createPlaylistHandler)
}

function* playlistSaga() {
	yield all([call(playlistsWatcher)])
}
export default playlistSaga
