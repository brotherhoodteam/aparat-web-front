import { call, put } from '@redux-saga/core/effects'

import api from '../../../core/api'
import {
	PlaylistsDataResponseType,
	PlaylistDataResponseType,
	SetPlaylistStartPayloadType
} from '../interface'
import {
	getPlaylistsSuccessAction,
	getPlaylistsFailedAction,
	setPlaylistSuccessAction,
	setPlaylistFailedAction
} from '../slice'
import { setStatusAction } from '../../status/slice'
import { appErrorHandler } from '../../app/saga/handlers'

export function* getPlaylistsHandler() {
	try {
		const { data }: PlaylistsDataResponseType = yield call(api.playlists.get)
		yield put(getPlaylistsSuccessAction({ playlists: data }))
	} catch (error) {
		yield call(appErrorHandler, error, getPlaylistsFailedAction, true)
	}
}

export function* setPlaylistHandler({
	payload: { playlist }
}: SetPlaylistStartPayloadType) {
	try {
		const { data }: PlaylistDataResponseType = yield call(api.playlists.set, playlist)
		yield put(setPlaylistSuccessAction({ playlist: data }))
		yield put(
			setStatusAction({ status: 'success', message: 'لیست پخش جدید باموفقیت اضافه شد' })
		)
	} catch (error) {
		yield call(appErrorHandler, error, setPlaylistFailedAction, true)
	}
}
