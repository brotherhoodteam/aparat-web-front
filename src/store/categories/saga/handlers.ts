import { call, put } from '@redux-saga/core/effects'
import api from 'config/api'
import {
	CreateCategoryRequest,
	CreateCategoryResponsePayload,
	FetchCategoryListResponsePayload
} from '../interface'
import {
	fetchCategoryListSuccess,
	fetchCategoryListFailure,
	createCategorySuccess,
	createCategoryFailure
} from '../slice'
import { showStatusAction } from 'store/status/slice'

import { appError } from 'store/app/saga/handlers'

export function* fetchCategoryListHandler() {
	try {
		const { data }: FetchCategoryListResponsePayload = yield call(api.categories.get)
		yield put(fetchCategoryListSuccess({ categoryList: data }))
	} catch (error) {
		yield call(appError, error, fetchCategoryListFailure, true)
	}
}

export function* createCategoryHandler({ payload: { category } }: CreateCategoryRequest) {
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
