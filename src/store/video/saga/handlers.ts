import { call, fork, put, take } from '@redux-saga/core/effects'
import { EventChannel, eventChannel } from '@redux-saga/core'

import api from '../../../core/api'
import { getErrorInfo } from '../../../utils'
import {
	uploadVideoSuccessAction,
	uploadVideoFailedAction,
	uploadVideoProgressAction
} from '../slice'
import { setAppErrorAction } from '../../app/slice'
import { setStatusAction } from '../../status/slice'
import { UploadVideoStartPayloadType } from '../interface'

interface Data {
	state: 'ok' | 'proccess' | 'error'
	percent: number
	response: {
		data: { video: string }
	}
	error: any
}
const identity = (a: any) => a

const createAsyncUpload = (file: File) => {
	let emit: any
	const chan: EventChannel<any> = eventChannel(emitter => {
		emit = emitter
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		return () => {}
	})

	const promise = api.video
		.upload(file, (e: ProgressEvent) => {
			emit({ percent: (e.loaded * 100) / e.total, state: 'proccess' })
		})
		.then(response => emit({ state: 'ok', response }))
		.catch(error => emit({ state: 'error', error }))

	return [promise, chan]
}

function* watchOnProgress(chan: any) {
	while (true) {
		const data: Data = yield take(chan)
		if (data.state === 'proccess') {
			yield put(uploadVideoProgressAction({ percent: Number(data.percent.toFixed(0)) }))
		} else if (data.state === 'ok') {
			yield put(uploadVideoSuccessAction({ video: data.response.data.video }))
		} else {
			console.log('error: data.error.response', data)
			yield put(
				uploadVideoFailedAction({
					error: { message: data.error.message, status: data.error.response?.status }
				})
			)
		}
	}
}

export function* fileUploadHandler({ payload: { video } }: UploadVideoStartPayloadType) {
	try {
		// console.log('file', file)
		const [promise, chan] = createAsyncUpload(video)
		yield fork(watchOnProgress, chan)
		yield call(identity, promise)
	} catch (error) {
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				uploadVideoFailedAction({ error: { message: errorMessage, status: statusCode } })
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
