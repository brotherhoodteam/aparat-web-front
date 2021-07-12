import { takeLatest } from '@redux-saga/core/effects'
import {
	uploadVideoStartAction,
	uploadBannerStartAction,
	publishVideoStartAction,
	getMyVideosStartAction,
	removeVideoStartAction,
	getVideoStartAction,
	updateVideoStartAction
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
	yield takeLatest(publishVideoStartAction, publishVideoHandler)
	yield takeLatest(getMyVideosStartAction, getMyVideos)
	yield takeLatest(removeVideoStartAction, removeVideoHandler)
	yield takeLatest(getVideoStartAction, getVideoHandler)
	yield takeLatest(updateVideoStartAction, updateVideoHandler)
}
