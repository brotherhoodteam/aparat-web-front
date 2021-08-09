import { all, call, takeLatest } from 'redux-saga/effects'

function* watchers() {
	// yield takeLatest()
}

export default function* rootSaga() {
	yield all([call(watchers)])
}
