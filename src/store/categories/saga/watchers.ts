import { takeLatest } from '@redux-saga/core/effects'
import { getCategoriesStartAction } from '../slice'
import { getCategoriesHandler } from './handlers'

export function* getCategoriesWatcher() {
	yield takeLatest(getCategoriesStartAction, getCategoriesHandler)
}
