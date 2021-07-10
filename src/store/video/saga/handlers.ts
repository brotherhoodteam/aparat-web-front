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
	uploadBannerProgressAction,
	publishVideoSuccess,
	publishVideoFailed,
	getMyVideosSuccess,
	removeVideoFailed,
	removeVideoSuccess,
	removeVideoReset,
	getVideoFailed,
	getVideoSuccess,
	getMyVideosStart,
	updateVideoFailed,
	updateVideoSuccess
} from '../slice'
import { setAppErrorAction } from '../../app/slice'
import { setStatusAction } from '../../status/slice'
import {
	GetVideoStartPayloadType,
	PublishVideoStartPayloadType,
	RemoveVideoStartPayloadType,
	ResponseGetMyVideos,
	ResponseGetVideo,
	ResponsePublishType,
	ResponseRemoveVideo,
	UpdateVideoStartPayloadType,
	UploadBannerStartPayloadType,
	UploadVideoStartPayloadType,
	VideosType
} from '../interface'

import { select } from 'redux-saga/effects'
import { selectMyVideosData } from '../selectors'

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

export function* publishVideoHandler({
	payload: { video }
}: PublishVideoStartPayloadType) {
	try {
		const { data }: ResponsePublishType = yield call(api.video.publish, video)
		yield put(publishVideoSuccess({ data }))
		yield put(getMyVideosStart())
		yield put(setStatusAction({ message: 'ویدئو با موفقیت اضافه شد', status: 'success' }))
	} catch (error) {
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				publishVideoFailed({ error: { message: errorMessage, status: statusCode } })
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

export function* getMyVideos() {
	try {
		const { data }: ResponseGetMyVideos = yield call(api.video.getList)
		yield put(
			getMyVideosSuccess({
				videos: data
			})
		)
	} catch (errro) {}
}

export function* removeVideoHandler({ payload: { slug } }: RemoveVideoStartPayloadType) {
	try {
		const { data }: ResponseRemoveVideo = yield call(api.video.delete, slug)
		yield put(removeVideoSuccess(data))
		const videos: VideosType = yield select(selectMyVideosData)
		const newItems = videos.data.filter(item => item.slug !== slug)
		yield put(getMyVideosSuccess({ videos: { ...videos, data: newItems } }))
		yield put(setStatusAction({ message: 'ویدئو با موفقیت حذف شد', status: 'success' }))
	} catch (error) {
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				removeVideoFailed({ error: { message: errorMessage, status: statusCode } })
			)
			yield put(setStatusAction({ message: errorMessage, status: 'warn' }))
		} else {
			// Server Error
			yield put(
				setAppErrorAction({ error: { message: errorMessage, status: statusCode } })
			)
		}
	} finally {
		yield put(removeVideoReset())
	}
}

export function* getVideoHandler({ payload: { slug } }: GetVideoStartPayloadType) {
	try {
		const { data }: ResponseGetVideo = yield call(api.video.get, slug)
		yield put(getVideoSuccess({ video: data }))
	} catch (error) {
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(getVideoFailed({ error: { message: errorMessage, status: statusCode } }))
		} else {
			// Server Error
			yield put(
				setAppErrorAction({ error: { message: errorMessage, status: statusCode } })
			)
		}
	}
}

export function* updateVideoHandler({
	payload: { slug, video }
}: UpdateVideoStartPayloadType) {
	try {
		const { data }: ResponseGetVideo = yield call(api.video.update, slug, video)
		yield put(updateVideoSuccess({ video: data }))
		yield put(
			setStatusAction({ message: 'ویدئو با موفقیت بروزرسانی شد', status: 'success' })
		)
	} catch (error) {
		const { errorMessage, statusCode } = getErrorInfo(error)
		if (error.response) {
			// Request Error
			yield put(
				updateVideoFailed({ error: { message: errorMessage, status: statusCode } })
			)
		} else {
			// Server Error
			yield put(
				setAppErrorAction({ error: { message: errorMessage, status: statusCode } })
			)
		}
	}
}
