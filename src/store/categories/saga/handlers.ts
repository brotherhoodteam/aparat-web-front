import { call, put } from '@redux-saga/core/effects'

import api from '../../../core/api'
import { CategoriesListResponseType } from '../interface'
import { getCategoriesSuccessAction, getCategoriesFailedAction } from '../slice'

export function* getCategoriesHandler() {
	try {
		const { data }: CategoriesListResponseType = yield call(api.categories.list)
		yield put(getCategoriesSuccessAction({ categoriesData: data }))
	} catch (error) {
		yield put(
			getCategoriesFailedAction({
				error: { message: error.message, status: error.status }
			})
		)
	}
}
