import { takeLatest } from '@redux-saga/core/effects'
import { fetchPlaylistListRequest, createPlaylistRequest } from '../slice'
import { fetchPlaylistListHandler, createPlaylistHandler } from './handlers'

export function* playlistsWatcher() {
	yield takeLatest(fetchPlaylistListRequest, fetchPlaylistListHandler)
	yield takeLatest(createPlaylistRequest, createPlaylistHandler)
}
