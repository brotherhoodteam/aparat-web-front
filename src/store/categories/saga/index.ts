import { all, call } from '@redux-saga/core/effects'
import { categoriesWatcher } from './watchers'

export default function* catgoriesSaga() {
	yield all([call(categoriesWatcher)])
}
