import { takeLatest } from '@redux-saga/core/effects'
import { getCategoryListStartAction, setCategoryStartAction } from '../slice'
import { getCategoriesHandler, setCategoryHandler } from './handlers'

export function* categoriesWatcher() {
	yield takeLatest(getCategoryListStartAction, getCategoriesHandler)
	yield takeLatest(setCategoryStartAction, setCategoryHandler)
}
