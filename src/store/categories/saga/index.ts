import { all, call } from '@redux-saga/core/effects'
import { getCategoriesWatcher } from './watchers'

export default function* catrgoriesSaga() {
	yield all([call(getCategoriesWatcher)])
}
