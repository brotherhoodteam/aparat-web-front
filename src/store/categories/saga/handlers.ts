import { call, put } from '@redux-saga/core/effects'

import api from '../../../core/api'
import {
	CategoriesDataResponseType,
	CategoryDataResponseType,
	SetCategoryStartPayloadType
} from '../interface'
import {
	getCategoriesSuccessAction,
	getCategoriesFailedAction,
	setCategorySuccessAction,
	setCategoryFailedAction
} from '../slice'
import { setStatusAction } from '../../status/slice'
import { setAppErrorAction } from '../../app/slice'
import { getErrorInfo } from '../../../utils'

export function* getCategoriesHandler() {
	try {
		const { data }: CategoriesDataResponseType = yield call(api.categories.get)
		yield put(getCategoriesSuccessAction({ categories: data }))
	} catch (error) {
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				getCategoriesFailedAction({
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
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				setCategoryFailedAction({
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
