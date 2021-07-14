import { createSlice } from '@reduxjs/toolkit'
import {
	VideoStateType,
	UploadVideoStartPayloadType,
	UploadVideoSuccessPayloadType,
	UploadBannerStartPayloadType,
	UploadBannerSuccessPayloadType,
	PublishVideoStartPayloadType,
	PublishVideoSuccessPayloadType,
	ProgressPayloadType,
	GetVideoListSuccessPayloadType,
	DeleteVideoStartPayloadType,
	RemoveVideoSuccessPayloadType,
	GetVideoSuccessPayloadType,
	GetVideoStartPayloadType,
	UpdateVideoStartPayloadType,
	GetVideoListStartPayloadType,
	UpdateVideoSuccessPayloadType,
	ErrorPayloadType
} from './interface'

const initialState: VideoStateType = {
	upload: {
		id: null,
		loading: false,
		progress: 0,
		errors: null
	},
	get: {
		slug: null,
		data: null,
		loading: false,
		errors: null
	},
	uploadBanner: {
		id: null,
		loading: false,
		progress: 0,
		errors: null
	},
	list: {
		data: null,
		loading: false,
		errors: null
	},
	delete: {
		slug: null,
		done: false,
		loading: false,
		errors: null
	},
	update: {
		slug: null,
		loading: false,
		errors: null
	},
	publish: {
		response: null,
		loading: false,
		errors: null
	}
}

const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		uploadVideoStartAction: (state, action: UploadVideoStartPayloadType) => {
			state.upload.id = null
			state.upload.loading = true
			state.upload.progress = 0
			state.upload.errors = null
		},
		uploadVideoProgressAction: (state, action: ProgressPayloadType) => {
			state.upload.id = null
			state.upload.loading = true
			state.upload.progress = action.payload.percent
			state.upload.errors = null
		},
		uploadVideoSuccessAction: (state, action: UploadVideoSuccessPayloadType) => {
			state.upload.id = action.payload.videoId
			state.upload.loading = false
			state.upload.errors = null
		},
		uploadVideoFailedAction: (state, action: ErrorPayloadType) => {
			state.upload.id = null
			state.upload.loading = false
			state.upload.progress = 0
			state.upload.errors = action.payload.error
		},

		uploadBannerStartAction: (state, action: UploadBannerStartPayloadType) => {
			state.uploadBanner.id = null
			state.uploadBanner.loading = true
			state.uploadBanner.progress = 0
			state.uploadBanner.errors = null
		},
		uploadBannerProgressAction: (state, action: ProgressPayloadType) => {
			state.uploadBanner.id = null
			state.uploadBanner.loading = true
			state.uploadBanner.progress = action.payload.percent
			state.uploadBanner.errors = null
		},
		uploadBannerSuccessAction: (state, action: UploadBannerSuccessPayloadType) => {
			state.uploadBanner.id = action.payload.bannerId
			state.uploadBanner.loading = false
			state.uploadBanner.errors = null
		},
		uploadBannerFailedAction: (state, action: ErrorPayloadType) => {
			state.uploadBanner.id = null
			state.uploadBanner.loading = false
			state.uploadBanner.progress = 0
			state.uploadBanner.errors = action.payload.error
		},

		getVideoStartAction: (state, action: GetVideoStartPayloadType) => {
			state.get.slug = action.payload.slug
			state.get.data = null
			state.get.loading = true
			state.get.errors = null
		},
		getVideoSuccessAction: (state, action: GetVideoSuccessPayloadType) => {
			state.get.data = action.payload.video
			state.get.loading = false
			state.get.errors = null
		},
		getVideoFailedAction: (state, action: ErrorPayloadType) => {
			state.get.slug = null
			state.get.data = null
			state.get.loading = false
			state.get.errors = action.payload.error
		},

		getVideoListStartAction: (state, action: GetVideoListStartPayloadType) => {
			state.list.data = null
			state.list.loading = true
			state.list.errors = null
		},
		getVideoListSuccessAction: (state, action: GetVideoListSuccessPayloadType) => {
			state.list.data = action.payload.videos
			state.list.loading = false
			state.list.errors = null
		},
		getVideoListFailedAction: (state, action) => {
			state.list.data = null
			state.list.loading = false
			state.list.errors = action.payload.error
		},
		deleteVideoStartAction: (state, action: DeleteVideoStartPayloadType) => {
			state.delete.slug = action.payload.slug
			state.delete.done = false
			state.delete.loading = true
			state.delete.errors = null
		},
		deleteVideoSuccessAction: (state, action: RemoveVideoSuccessPayloadType) => {
			state.delete.loading = false
			state.delete.done = true
			state.delete.errors = null
		},
		deleteVideoFailedAction: (state, action: ErrorPayloadType) => {
			state.delete.slug = null
			state.delete.done = false
			state.delete.loading = false
			state.delete.errors = action.payload.error
		},
		deleteVideoResetAction: state => {
			state.delete.slug = null
			state.delete.loading = false
			state.delete.done = false
			state.delete.errors = null
		},
		updateVideoStartAction: (state, action: UpdateVideoStartPayloadType) => {
			state.update.slug = action.payload.slug
			state.update.loading = true
			state.update.errors = null
		},
		updateVideoSuccessAction: (state, action: UpdateVideoSuccessPayloadType) => {
			state.update.loading = false
			state.update.errors = null
		},
		updateVideoFailedAction: (state, action: ErrorPayloadType) => {
			state.update.slug = null
			state.update.loading = false
			state.update.errors = action.payload.error
		},
		publishVideoStartAction: (state, action: PublishVideoStartPayloadType) => {
			state.publish.response = null
			state.publish.loading = true
			state.publish.errors = null
		},
		publishVideoSuccessAction: (state, action: PublishVideoSuccessPayloadType) => {
			state.publish.response = action.payload.data
			state.publish.loading = false
			state.publish.errors = null
		},
		publishVideoFailedAction: (state, action: ErrorPayloadType) => {
			state.publish.response = null
			state.publish.loading = false
			state.publish.errors = action.payload.error
		},
		publishVideoResetAction: state => {
			state.upload.id = null
			state.upload.loading = false
			state.upload.progress = 0
			state.upload.errors = null

			state.uploadBanner.id = null
			state.uploadBanner.loading = false
			state.uploadBanner.progress = 0
			state.uploadBanner.errors = null

			state.publish.response = null
			state.publish.loading = false
			state.publish.errors = null
		}
	}
})

export const {
	uploadVideoStartAction,
	uploadVideoProgressAction,
	uploadVideoSuccessAction,
	uploadVideoFailedAction,
	uploadBannerStartAction,
	uploadBannerProgressAction,
	uploadBannerSuccessAction,
	uploadBannerFailedAction,
	publishVideoStartAction,
	publishVideoSuccessAction,
	publishVideoFailedAction,
	publishVideoResetAction,
	getVideoListStartAction,
	getVideoListSuccessAction,
	getVideoListFailedAction,
	deleteVideoStartAction,
	deleteVideoSuccessAction,
	deleteVideoFailedAction,
	deleteVideoResetAction,
	getVideoStartAction,
	getVideoSuccessAction,
	getVideoFailedAction,
	updateVideoStartAction,
	updateVideoSuccessAction,
	updateVideoFailedAction
} = videoSlice.actions
export default videoSlice.reducer
