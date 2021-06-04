import { takeLatest } from '@redux-saga/core/effects'
import { getPlaylistsStartAction, setPlaylistStartAction } from '../slice'
import { getPlaylistsHandler, setPlaylistHandler } from './handlers'

export function* playlistsWatcher() {
	yield takeLatest(getPlaylistsStartAction, getPlaylistsHandler)
	yield takeLatest(setPlaylistStartAction, setPlaylistHandler)
}
