import { takeLatest } from '@redux-saga/core/effects'
import { getTagsStartAction, setTagStartAction } from '../slice'
import { getTagsHandler, setTagHandler } from './handlers'

export function* tagsWatcher() {
	yield takeLatest(getTagsStartAction, getTagsHandler)
	yield takeLatest(setTagStartAction, setTagHandler)
}
