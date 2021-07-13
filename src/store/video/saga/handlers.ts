import { call, fork, put, take } from '@redux-saga/core/effects'
import { EventChannel, eventChannel } from '@redux-saga/core'
import { select } from 'redux-saga/effects'
import { selectListVideo } from '../selectors'

import api from '../../../core/api'
import {
	uploadVideoSuccessAction,
	uploadVideoFailedAction,
	uploadVideoProgressAction,
	uploadBannerSuccessAction,
	uploadBannerFailedAction,
	uploadBannerProgressAction,
	publishVideoSuccessAction,
	publishVideoFailedAction,
	getVideoListSuccessAction,
	deleteVideoFailedAction,
	deleteVideoSuccessAction,
	deleteVideoResetAction,
	getVideoFailedAction,
	getVideoSuccessAction,
	getVideoListStartAction,
	updateVideoFailedAction,
	updateVideoSuccessAction,
	getVideoListFailedAction
} from '../slice'
import { setStatusAction } from '../../status/slice'
import {
	GetVideoStartPayloadType,
	PublishVideoStartPayloadType,
	RemoveVideoStartPayloadType,
	ResponseGetVideoList,
	ResponseGetVideo,
	ResponsePublishType,
	ResponseRemoveVideo,
	UpdateVideoStartPayloadType,
	UploadBannerStartPayloadType,
	UploadVideoStartPayloadType,
	VideosType
} from '../interface'
import { appErrorHandler } from '../../app/saga/handlers'

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
		yield call(appErrorHandler, error, uploadVideoFailedAction, true)
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
		yield call(appErrorHandler, error, uploadBannerFailedAction, true)
	}
}

export function* publishVideoHandler({
	payload: { video }
}: PublishVideoStartPayloadType) {
	try {
		const { data }: ResponsePublishType = yield call(api.video.publish, video)
		yield put(publishVideoSuccessAction({ data }))
		yield put(getVideoListStartAction())
		yield put(setStatusAction({ message: 'ویدئو با موفقیت اضافه شد', status: 'success' }))
	} catch (error) {
		yield call(appErrorHandler, error, publishVideoFailedAction, true)
	}
}

export function* getVideoList() {
	try {
		const { data }: ResponseGetVideoList = yield call(api.video.getList)
		yield put(
			getVideoListSuccessAction({
				videos: data
			})
		)
	} catch (error) {
		yield call(appErrorHandler, error, getVideoListFailedAction, true)
	}
}

export function* removeVideoHandler({ payload: { slug } }: RemoveVideoStartPayloadType) {
	try {
		const { data }: ResponseRemoveVideo = yield call(api.video.delete, slug)
		yield put(deleteVideoSuccessAction(data))
		const { data: videos }: { data: VideosType } = yield select(selectListVideo)
		const newItems = videos.data.filter(item => item.slug !== slug)
		yield put(getVideoListSuccessAction({ videos: { ...videos, data: newItems } }))
		yield put(setStatusAction({ message: 'ویدئو با موفقیت حذف شد', status: 'success' }))
	} catch (error) {
		yield call(appErrorHandler, error, deleteVideoFailedAction, true)
	} finally {
		yield put(deleteVideoResetAction())
	}
}

export function* getVideoHandler({ payload: { slug } }: GetVideoStartPayloadType) {
	try {
		const { data }: ResponseGetVideo = yield call(api.video.get, slug)
		yield put(getVideoSuccessAction({ video: data }))
	} catch (error) {
		yield call(appErrorHandler, error, getVideoFailedAction, true)
	}
}

export function* updateVideoHandler({
	payload: { slug, video }
}: UpdateVideoStartPayloadType) {
	try {
		const { data }: ResponseGetVideo = yield call(api.video.update, slug, video)
		yield put(updateVideoSuccessAction({ video: data }))
		yield put(
			setStatusAction({ message: 'ویدئو با موفقیت بروزرسانی شد', status: 'success' })
		)
	} catch (error) {
		yield call(appErrorHandler, error, updateVideoFailedAction, true)
	}
}
