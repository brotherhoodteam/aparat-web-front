import { takeLatest } from '@redux-saga/core/effects'
import { fetchTagListRequest, createTagRequest } from '../slice'
import { fetchTagListHandler, createTagHandler } from './handlers'

export function* tagsWatcher() {
	yield takeLatest(fetchTagListRequest, fetchTagListHandler)
	yield takeLatest(createTagRequest, createTagHandler)
}
