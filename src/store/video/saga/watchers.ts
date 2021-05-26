import { takeLatest } from '@redux-saga/core/effects'
import { fileUploadStartAction } from '../slice'
import { fileUploadHandler } from './handlers'

export function* fileUploadWatcher() {
	yield takeLatest(fileUploadStartAction, fileUploadHandler)
}
