import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import api from 'core/api/config'
import {
	CreateCategoryRequest,
	CreateCategoryResponsePayload,
	FetchCategoryListResponsePayload
} from './types'
import {
	fetchCategoryListSuccess,
	fetchCategoryListFailure,
	createCategorySuccess,
	createCategoryFailure,
	fetchCategoryListRequest,
	createCategoryRequest
} from './slice'
import { showStatusAction } from 'store/status/slice'

import { appError } from 'store/app/saga'

export function* fetchCategoryList() {
	try {
		const { data }: FetchCategoryListResponsePayload = yield call(api.categories.get)
		yield put(fetchCategoryListSuccess({ data }))
	} catch (error) {
		yield call(appError, error, fetchCategoryListFailure, true)
	}
}

export function* createCategory({ payload: { category } }: CreateCategoryRequest) {
	try {
		const { data }: CreateCategoryResponsePayload = yield call(
			api.categories.set,
			category
		)
		yield put(createCategorySuccess({ category: data }))
		yield put(
			showStatusAction({ status: 'success', message: 'دسته جدید باموفقیت اضافه شد' })
		)
	} catch (error) {
		yield call(appError, error, createCategoryFailure, true)
	}
}

function* categoriesWatcher() {
	yield takeLatest(fetchCategoryListRequest, fetchCategoryList)
	yield takeLatest(createCategoryRequest, createCategory)
}

export default function* catgoriesSaga() {
	yield all([call(categoriesWatcher)])
}
