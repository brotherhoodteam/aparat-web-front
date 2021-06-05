import { call, put } from '@redux-saga/core/effects'

import api from '../../../core/api'
import { getErrorInfo } from '../../../utils'
import { uploadFileFailedAction } from '../slice'
import { setAppErrorAction } from '../../app/slice'
import { setStatusAction } from '../../status/slice'
import { ResponseVideoType, UploadFileStartPayloadType } from '../interface'

export function* fileUploadHandler({ payload: { file } }: UploadFileStartPayloadType) {
	try {
		const { data }: ResponseVideoType = yield call(api.video.upload, file)
	} catch (error) {
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				uploadFileFailedAction({ error: { message: errorMessage, status: statusCode } })
			)
			yield put(setStatusAction({ message: errorMessage, status: 'warn' }))
		} else {
			// Server Error
			yield put(
				setAppErrorAction({ error: { message: errorMessage, status: statusCode } })
			)
		}
	}
}
