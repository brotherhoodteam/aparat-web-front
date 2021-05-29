import { takeLatest } from '@redux-saga/core/effects'
import { uploadFileStartAction } from '../slice'
import { fileUploadHandler } from './handlers'

export function* fileUploadWatcher() {
	yield takeLatest(uploadFileStartAction, fileUploadHandler)
}
