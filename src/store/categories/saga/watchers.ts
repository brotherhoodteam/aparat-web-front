import { takeLatest } from '@redux-saga/core/effects'
import { fetchCategoryListRequest, createCategoryRequest } from '../slice'
import { fetchCategoryListHandler, createCategoryHandler } from './handlers'

export function* categoriesWatcher() {
	yield takeLatest(fetchCategoryListRequest, fetchCategoryListHandler)
	yield takeLatest(createCategoryRequest, createCategoryHandler)
}
