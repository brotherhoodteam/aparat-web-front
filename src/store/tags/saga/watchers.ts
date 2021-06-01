import { takeLatest } from '@redux-saga/core/effects'
import { getTagsStartAction } from '../slice'
import { getTagsHandler } from './handlers'

export function* getTagsWatcher() {
	yield takeLatest(getTagsStartAction, getTagsHandler)
}
