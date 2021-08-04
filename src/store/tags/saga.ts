import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import api from 'core/api'
import { appError } from 'store/app/saga'
import { showStatusAction } from 'store/status/slice'
import {
	CreateTagRequest,
	FetchTagListResponsePayload,
	CreateTagResponsePayload
} from './types'
import {
	fetchTagListSuccess,
	fetchTagListFailure,
	createTagFailure,
	createTagSuccess,
	fetchTagListRequest,
	createTagRequest
} from './slice'

export function* fetchTagListHandler() {
	try {
		const { data }: FetchTagListResponsePayload = yield call(api.tags.get)
		yield put(fetchTagListSuccess({ tags: data }))
	} catch (error) {
		yield call(appError, error, fetchTagListFailure, true)
	}
}

export function* createTagHandler({ payload: { tag } }: CreateTagRequest) {
	try {
		const { data }: CreateTagResponsePayload = yield call(api.tags.set, tag)
		yield put(createTagSuccess({ data }))
		yield put(
			showStatusAction({ status: 'success', message: 'برچسب جدید با موفقیت اضافه شد' })
		)
	} catch (error) {
		yield call(appError, error, createTagFailure, true)
	}
}

function* tagsWatcher() {
	yield takeLatest(fetchTagListRequest, fetchTagListHandler)
	yield takeLatest(createTagRequest, createTagHandler)
}

function* tagsSaga() {
	yield all([call(tagsWatcher)])
}

export default tagsSaga
