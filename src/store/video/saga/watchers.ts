import { takeLatest } from '@redux-saga/core/effects'
import { uploadVideoStartAction } from '../slice'
import { fileUploadHandler } from './handlers'

export function* fileUploadWatcher() {
	yield takeLatest(uploadVideoStartAction, fileUploadHandler)
}
