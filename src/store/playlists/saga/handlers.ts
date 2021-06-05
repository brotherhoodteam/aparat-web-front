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
import { setAppErrorAction } from '../../app/slice'
import { getErrorInfo } from '../../../utils'

export function* getPlaylistsHandler() {
	try {
		const { data }: PlaylistsDataResponseType = yield call(api.playlists.get)
		yield put(getPlaylistsSuccessAction({ playlists: data }))
	} catch (error) {
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				getPlaylistsFailedAction({
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
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				setPlaylistFailedAction({
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
