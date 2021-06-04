import { call, put } from '@redux-saga/core/effects'

import api from '../../../core/api'
import {
	CategoriesDataResponseType,
	CategoryDataResponseType,
	SetCategoryStartActionPayloadType
} from '../interface'
import {
	getCategoriesSuccessAction,
	getCategoriesFailedAction,
	setCategorySuccessAction,
	setCategoryFailedAction
} from '../slice'
import { setStatusAction } from '../../status/slice'

export function* getCategoriesHandler() {
	try {
		const { data }: CategoriesDataResponseType = yield call(api.categories.get)
		yield put(getCategoriesSuccessAction({ data }))
	} catch (error) {
		yield put(
			getCategoriesFailedAction({
				error: { message: error.message, status: error.status }
			})
		)
	}
}

export function* setCategoryHandler({ payload }: SetCategoryStartActionPayloadType) {
	try {
		const { data }: CategoryDataResponseType = yield call(api.categories.set, {
			title: payload.data.title,
			slug: payload.data.slug,
			icon: payload.data.icon
		})
		console.log('response', data)
		yield put(setCategorySuccessAction({ data }))
		yield put(
			setStatusAction({ status: 'success', message: 'دسته جدید باموفقیت اضافه شد' })
		)
	} catch (err) {
		yield put(
			setCategoryFailedAction({ error: { message: err.message, status: err.status } })
		)
		yield put(setStatusAction({ status: 'error', message: err.message }))
	}
}
