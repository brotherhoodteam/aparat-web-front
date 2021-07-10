import { takeLatest } from '@redux-saga/core/effects'
import {
	uploadVideoStartAction,
	uploadBannerStartAction,
	publishVideoStart,
	getMyVideosStart,
	removeVideoStart,
	getVideoStart,
	updateVideoStart
} from '../slice'
import {
	uploadVideoHandler,
	uploadBannerHandler,
	publishVideoHandler,
	removeVideoHandler,
	getVideoHandler,
	getMyVideos,
	updateVideoHandler
} from './handlers'

export function* uploadWatcher() {
	yield takeLatest(uploadBannerStartAction, uploadBannerHandler)
	yield takeLatest(uploadVideoStartAction, uploadVideoHandler)
	yield takeLatest(publishVideoStart, publishVideoHandler)
	yield takeLatest(getMyVideosStart, getMyVideos)
	yield takeLatest(removeVideoStart, removeVideoHandler)
	yield takeLatest(getVideoStart, getVideoHandler)
	yield takeLatest(updateVideoStart, updateVideoHandler)
}
