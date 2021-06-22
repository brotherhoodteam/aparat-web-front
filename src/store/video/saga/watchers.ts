import { takeLatest } from '@redux-saga/core/effects'
import {
	uploadVideoStartAction,
	uploadBannerStartAction,
	publishVideoStart
} from '../slice'
import { uploadVideoHandler, uploadBannerHandler, publishVideoHandler } from './handlers'

export function* uploadWatcher() {
	yield takeLatest(uploadBannerStartAction, uploadBannerHandler)
	yield takeLatest(uploadVideoStartAction, uploadVideoHandler)
	yield takeLatest(publishVideoStart, publishVideoHandler)
}
