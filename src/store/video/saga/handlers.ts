import { call, fork, put, take } from '@redux-saga/core/effects'
import { EventChannel, eventChannel } from '@redux-saga/core'

import api from '../../../core/api'
import { getErrorInfo } from '../../../utils'
import {
	uploadVideoSuccessAction,
	uploadVideoFailedAction,
	uploadVideoProgressAction,
	uploadBannerSuccessAction,
	uploadBannerFailedAction,
	uploadBannerProgressAction
} from '../slice'
import { setAppErrorAction } from '../../app/slice'
import { setStatusAction } from '../../status/slice'
import { UploadBannerStartPayloadType, UploadVideoStartPayloadType } from '../interface'

interface VideoData {
	state: 'ok' | 'proccess' | 'error'
	percent: number
	response: {
		data: { video: string }
	}
	error: any
}
interface BannerData {
	state: 'ok' | 'proccess' | 'error'
	percent: number
	response: {
		data: { banner: string }
	}
	error: any
}
const identity = (a: any) => a

const createAsyncUploadVideo = (file: File) => {
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
const createAsyncUploadBanner = (file: File) => {
	let emit: any
	const chan: EventChannel<any> = eventChannel(emitter => {
		emit = emitter
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		return () => {}
	})

	const promise = api.video
		.banner(file, (e: ProgressEvent) => {
			emit({ percent: (e.loaded * 100) / e.total, state: 'proccess' })
		})
		.then(response => emit({ state: 'ok', response }))
		.catch(error => emit({ state: 'error', error }))

	return [promise, chan]
}

function* onProgressVideo(chan: any) {
	while (true) {
		const data: VideoData = yield take(chan)
		if (data.state === 'proccess') {
			yield put(uploadVideoProgressAction({ percent: Number(data.percent.toFixed(0)) }))
		} else if (data.state === 'ok') {
			yield put(uploadVideoSuccessAction({ videoId: data.response.data.video }))
		} else {
			yield put(
				uploadVideoFailedAction({
					error: { message: data.error.message, status: data.error.response?.status }
				})
			)
		}
	}
}

function* onProgressBanner(chan: any) {
	while (true) {
		const data: BannerData = yield take(chan)
		if (data.state === 'proccess') {
			yield put(uploadBannerProgressAction({ percent: Number(data.percent.toFixed(0)) }))
		} else if (data.state === 'ok') {
			yield put(uploadBannerSuccessAction({ bannerId: data.response.data.banner }))
		} else {
			yield put(
				uploadBannerFailedAction({
					error: { message: data.error.message, status: data.error.response?.status }
				})
			)
		}
	}
}

export function* uploadVideoHandler({ payload: { video } }: UploadVideoStartPayloadType) {
	try {
		const [promise, chan] = createAsyncUploadVideo(video)
		yield fork(onProgressVideo, chan)
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

export function* uploadBannerHandler({
	payload: { banner }
}: UploadBannerStartPayloadType) {
	try {
		const [promise, chan] = createAsyncUploadBanner(banner)
		yield fork(onProgressBanner, chan)
		yield call(identity, promise)
	} catch (error) {
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				uploadBannerFailedAction({ error: { message: errorMessage, status: statusCode } })
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
