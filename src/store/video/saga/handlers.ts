import { call, fork, put, take } from '@redux-saga/core/effects'
import { EventChannel, eventChannel } from '@redux-saga/core'
import { select } from 'redux-saga/effects'
import { selectVideoList } from '../selectors'
import api from 'config/api'

import {
	uploadVideoSuccess,
	uploadVideoFailure,
	uploadVideoProgress,
	uploadBannerSuccess,
	uploadBannerFailure,
	uploadBannerProgress,
	createPostSuccess,
	createPostFailure,
	fetchVideoListSuccess,
	deleteVideoFailure,
	deleteVideoSuccess,
	deleteVideoReset,
	fetchVideoFailure,
	fetchVideoSuccess,
	fetchVideoListRequest,
	updatePostFailure,
	updatePostSuccess,
	fetchVideoListFailure,
	fetchVideoStatisticsSuccess,
	fetchVideoStatisticsFailure
} from '../slice'
import { showStatusAction } from 'store/status/slice'
import {
	FetchVideoRequest,
	CreatePostRequest,
	DeleteVideoRequest,
	FetchVideoListResponsePayload,
	FetchVideoResponsePayload,
	CreatePostResponsePayload,
	DeletePostResponsePayload,
	UpdateVideoRequest,
	UploadBannerRequest,
	UploadVideoRequest,
	PostWrapper,
	FetchVideoListRequest,
	FetchVideoStatisticsRequest,
	FetchVideoStatisticsResponsePayload
} from '../interface'
import { appError } from 'store/app/saga/handlers'

interface VideoData {
	state: 'ok' | 'proccess' | 'error'
	percent: number
	response: {
		data: { video: string }
	}
	error: any
}
interface UploadBannerRequestPayload {
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

function* onProgressVideoHanlder(chan: any) {
	while (true) {
		const data: VideoData = yield take(chan)
		if (data.state === 'proccess') {
			yield put(uploadVideoProgress({ percent: Number(data.percent.toFixed(0)) }))
		} else if (data.state === 'ok') {
			yield put(uploadVideoSuccess({ videoId: data.response.data.video }))
		} else {
			yield put(
				uploadVideoFailure({
					error: { message: data.error.message, status: data.error.response?.status }
				})
			)
		}
	}
}

function* onProgressBannerHanlder(chan: any) {
	while (true) {
		const data: UploadBannerRequestPayload = yield take(chan)
		if (data.state === 'proccess') {
			yield put(uploadBannerProgress({ percent: Number(data.percent.toFixed(0)) }))
		} else if (data.state === 'ok') {
			yield put(uploadBannerSuccess({ bannerId: data.response.data.banner }))
		} else {
			yield put(
				uploadBannerFailure({
					error: { message: data.error.message, status: data.error.response?.status }
				})
			)
		}
	}
}

export function* uploadVideoHanlder({ payload: { video } }: UploadVideoRequest) {
	try {
		const [promise, chan] = createAsyncUploadVideo(video)
		yield fork(onProgressVideoHanlder, chan)
		yield call(identity, promise)
	} catch (error) {
		yield call(appError, error, uploadVideoFailure, true)
	}
}

export function* uploadBannerHanlder({ payload: { banner } }: UploadBannerRequest) {
	try {
		const [promise, chan] = createAsyncUploadBanner(banner)
		yield fork(onProgressBannerHanlder, chan)
		yield call(identity, promise)
	} catch (error) {
		yield call(appError, error, uploadBannerFailure, true)
	}
}

export function* createPostHanlder({ payload: { video } }: CreatePostRequest) {
	try {
		const { data }: CreatePostResponsePayload = yield call(api.video.publish, video)
		yield put(createPostSuccess({ data }))
		yield put(fetchVideoListRequest())
		yield put(
			showStatusAction({ message: 'ویدئو با موفقیت اضافه شد', status: 'success' })
		)
	} catch (error) {
		yield call(appError, error, createPostFailure, true)
	}
}

export function* fetchVideoListHanlder({ payload }: FetchVideoListRequest) {
	try {
		const { data }: FetchVideoListResponsePayload = yield call(
			api.video.getList,
			payload?.page,
			payload?.per_page
		)
		yield put(
			fetchVideoListSuccess({
				videos: data
			})
		)
	} catch (error) {
		yield call(appError, error, fetchVideoListFailure, true)
	}
}

export function* fetchVideoStatisticsHanlder({ payload }: FetchVideoStatisticsRequest) {
	try {
		const { data }: FetchVideoStatisticsResponsePayload = yield call(
			api.video.statistics,
			payload.slug,
			payload.renge
		)
		yield put(
			fetchVideoStatisticsSuccess({
				statistics: data
			})
		)
	} catch (error) {
		yield call(appError, error, fetchVideoStatisticsFailure, true)
	}
}

export function* deleteVideoHanlder({ payload: { slug } }: DeleteVideoRequest) {
	try {
		const { data }: DeletePostResponsePayload = yield call(api.video.delete, slug)
		yield put(deleteVideoSuccess(data))

		const { data: videos }: { data: PostWrapper } = yield select(selectVideoList)
		yield put(fetchVideoListRequest({ page: videos.current_page }))
		yield put(showStatusAction({ message: 'ویدئو با موفقیت حذف شد', status: 'success' }))
	} catch (error) {
		yield call(appError, error, deleteVideoFailure, true)
	} finally {
		yield put(deleteVideoReset())
	}
}

export function* fetchVideoHanlder({ payload: { slug } }: FetchVideoRequest) {
	try {
		const { data }: FetchVideoResponsePayload = yield call(api.video.get, slug)
		yield put(fetchVideoSuccess({ video: data }))
	} catch (error) {
		yield call(appError, error, fetchVideoFailure, true)
	}
}

export function* updatePostHanlder({ payload: { slug, video } }: UpdateVideoRequest) {
	try {
		const { data }: FetchVideoResponsePayload = yield call(api.video.update, slug, video)
		yield put(updatePostSuccess({ video: data }))
		yield put(
			showStatusAction({ message: 'ویدئو با موفقیت بروزرسانی شد', status: 'success' })
		)
	} catch (error) {
		yield call(appError, error, updatePostFailure, true)
	}
}
