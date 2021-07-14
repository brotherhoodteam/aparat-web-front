import { takeLatest } from '@redux-saga/core/effects'
import {
	uploadVideoStartAction,
	uploadBannerStartAction,
	publishVideoStartAction,
	getVideoListStartAction,
	deleteVideoStartAction,
	getVideoStartAction,
	updateVideoStartAction
} from '../slice'
import {
	uploadVideoHandler,
	uploadBannerHandler,
	publishVideoHandler,
	deleteVideoHandler,
	getVideoHandler,
	getVideoList,
	updateVideoHandler
} from './handlers'

export function* uploadWatcher() {
	yield takeLatest(uploadBannerStartAction, uploadBannerHandler)
	yield takeLatest(uploadVideoStartAction, uploadVideoHandler)
	yield takeLatest(publishVideoStartAction, publishVideoHandler)
	yield takeLatest(getVideoListStartAction, getVideoList)
	yield takeLatest(deleteVideoStartAction, deleteVideoHandler)
	yield takeLatest(getVideoStartAction, getVideoHandler)
	yield takeLatest(updateVideoStartAction, updateVideoHandler)
}
