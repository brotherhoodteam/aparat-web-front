import { all, call } from '@redux-saga/core/effects'
import { playlistsWatcher } from './watchers'

export default function* playlistSaga() {
	yield all([call(playlistsWatcher)])
}
