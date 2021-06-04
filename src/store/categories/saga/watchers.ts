import { takeLatest } from '@redux-saga/core/effects'
import { getCategoriesStartAction, setCategoryStartAction } from '../slice'
import { getCategoriesHandler, setCategoryHandler } from './handlers'

export function* categoriesWatcher() {
	yield takeLatest(getCategoriesStartAction, getCategoriesHandler)
	yield takeLatest(setCategoryStartAction, setCategoryHandler)
}
