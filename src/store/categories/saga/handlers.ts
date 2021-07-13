import { call, put } from '@redux-saga/core/effects'
import api from '../../../core/api'
import {
	CategoriesDataResponseType,
	CategoryDataResponseType,
	SetCategoryStartPayloadType
} from '../interface'
import {
	getCategoryListSuccessAction,
	getCategoryListFailedAction,
	setCategorySuccessAction,
	setCategoryFailedAction
} from '../slice'
import { setStatusAction } from '../../status/slice'

import { appErrorHandler } from '../../app/saga/handlers'

export function* getCategoriesHandler() {
	try {
		const { data }: CategoriesDataResponseType = yield call(api.categories.get)
		yield put(getCategoryListSuccessAction({ categories: data }))
	} catch (error) {
		yield call(appErrorHandler, error, getCategoryListFailedAction, true)
	}
}

export function* setCategoryHandler({
	payload: { category }
}: SetCategoryStartPayloadType) {
	try {
		const { data }: CategoryDataResponseType = yield call(api.categories.set, category)
		yield put(setCategorySuccessAction({ category: data }))
		yield put(
			setStatusAction({ status: 'success', message: 'دسته جدید باموفقیت اضافه شد' })
		)
	} catch (error) {
		yield call(appErrorHandler, error, setCategoryFailedAction, true)
	}
}
