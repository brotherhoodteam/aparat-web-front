import { call, put } from '@redux-saga/core/effects'

import api from '../../../core/api'
import { CategoriesDataResponseType } from '../interface'
import { getCategoriesSuccessAction, getCategoriesFailedAction } from '../slice'

export function* getCategoriesHandler() {
	try {
		const { data }: CategoriesDataResponseType = yield call(api.categories.get)
		yield put(getCategoriesSuccessAction({ categoriesData: data }))
	} catch (error) {
		yield put(
			getCategoriesFailedAction({
				error: { message: error.message, status: error.status }
			})
		)
	}
}
