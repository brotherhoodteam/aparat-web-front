import { takeLatest } from '@redux-saga/core/effects'
import {
	uploadVideoStartAction,
	uploadBannerStartAction,
	publishVideoStart,
	getMyVideosStart
} from '../slice'
import {
	uploadVideoHandler,
	uploadBannerHandler,
	publishVideoHandler,
	getMyVideos
} from './handlers'

export function* uploadWatcher() {
	yield takeLatest(uploadBannerStartAction, uploadBannerHandler)
	yield takeLatest(uploadVideoStartAction, uploadVideoHandler)
	yield takeLatest(publishVideoStart, publishVideoHandler)
	yield takeLatest(getMyVideosStart, getMyVideos)
}
