import { takeLatest } from '@redux-saga/core/effects'
import {
	uploadVideoRequest,
	uploadBannerRequest,
	createPostRequest,
	fetchVideoListRequest,
	deleteVideoRequest,
	fetchVideoRequest,
	updatePostRequest,
	fetchVideoStatisticsRequest
} from '../slice'
import {
	createPostHanlder,
	deleteVideoHanlder,
	updatePostHanlder,
	uploadVideoHanlder,
	uploadBannerHanlder,
	fetchVideoHanlder,
	fetchVideoListHanlder,
	fetchVideoStatisticsHanlder
} from './handlers'

export function* uploadWatcher() {
	yield takeLatest(uploadBannerRequest, uploadBannerHanlder)
	yield takeLatest(uploadVideoRequest, uploadVideoHanlder)
	yield takeLatest(createPostRequest, createPostHanlder)
	yield takeLatest(fetchVideoListRequest, fetchVideoListHanlder)
	yield takeLatest(fetchVideoStatisticsRequest, fetchVideoStatisticsHanlder)
	yield takeLatest(fetchVideoRequest, fetchVideoHanlder)
	yield takeLatest(deleteVideoRequest, deleteVideoHanlder)
	yield takeLatest(updatePostRequest, updatePostHanlder)
}
