import { all, call } from '@redux-saga/core/effects'
import { getTagsWatcher } from './watchers'

export default function* tagsSaga() {
	yield all([call(getTagsWatcher)])
}
