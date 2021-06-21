import { takeLatest } from '@redux-saga/core/effects'
import { uploadVideoStartAction, uploadBannerStartAction } from '../slice'
import { uploadVideoHandler, uploadBannerHandler } from './handlers'

export function* uploadWatcher() {
	yield takeLatest(uploadBannerStartAction, uploadBannerHandler)
	yield takeLatest(uploadVideoStartAction, uploadVideoHandler)
}
