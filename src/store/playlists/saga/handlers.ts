import { call, put } from '@redux-saga/core/effects'

import api from 'config/api'
import {
	CreatePlaylistRequest,
	CreatePlaylistResponsePayload,
	FetchPlaylistListResponsePayload
} from '../interface'
import {
	fetchPlaylistListSuccess,
	fetchPlaylistListFailure,
	createPlaylistSuccess,
	createPlaylistFailure
} from '../slice'
import { showStatusAction } from 'store/status/slice'
import { appError } from 'store/app/saga/handlers'

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
