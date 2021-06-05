import { all, call } from '@redux-saga/core/effects'
import { tagsWatcher } from './watchers'

export default function* tagsSaga() {
	yield all([call(tagsWatcher)])
}
