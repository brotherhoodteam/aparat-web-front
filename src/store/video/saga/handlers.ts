import { FileUploadStartPayloadType } from '../interface'
import api from '../../../core/api'
import { call } from '@redux-saga/core/effects'

export function* fileUploadHandler({ payload: { file } }: FileUploadStartPayloadType) {
	try {
		const response: string = yield call(api.video.upload, file)
		yield console.log('response', response)
	} catch (err) {}
}
