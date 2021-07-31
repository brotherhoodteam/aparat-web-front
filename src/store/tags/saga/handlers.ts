import { call, put } from '@redux-saga/core/effects'
import api from 'core/api'
import { appError } from 'store/app/saga/handlers'
import { showStatusAction } from 'store/status/slice'
import {
	CreateTagRequest,
	FetchTagListResponsePayload,
	CreateTagResponsePayload
} from '../interface'
import {
	fetchTagListSuccess,
	fetchTagListFailure,
	createTagFailure,
	createTagSuccess
} from '../slice'

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
		yield put(createTagSuccess({ tag: data }))
		yield put(
			showStatusAction({ status: 'success', message: 'برچسب جدید با موفقیت اضافه شد' })
		)
	} catch (error) {
		yield call(appError, error, createTagFailure, true)
	}
}
