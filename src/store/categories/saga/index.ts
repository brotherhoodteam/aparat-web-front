import { all, call } from '@redux-saga/core/effects'
import { getCategoriesWatcher } from './watchers'

export default function* catgoriesSaga() {
	yield all([call(getCategoriesWatcher)])
}
