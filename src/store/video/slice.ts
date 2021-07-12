import { createSlice } from '@reduxjs/toolkit'
import { ErrorPayloadType } from '../tags/interface'
import {
	UploadVideoStartPayloadType,
	UploadVideoSuccessPayloadType,
	VideoStateType,
	UploadBannerStartPayloadType,
	UploadBannerSuccessPayloadType,
	PublishVideoStartPayloadType,
	PublishVideoSuccessPayloadType,
	ProgressPayloadType,
	GetMyVideosSuccessPayloadType,
	RemoveVideoStartPayloadType,
	RemoveVideoSuccessPayloadType,
	GetVideoSuccessPayloadType,
	GetVideoStartPayloadType,
	UpdateVideoStartPayloadType,
	UpdateVideoSuccessPayloadType
} from './interface'

const initialState: VideoStateType = {
	videoId: null,
	videoLoading: false,
	videoProgress: 0,
	videoErrors: null,
	bannerId: null,
	bannerLoading: false,
	bannerProgress: 0,
	bannerErrors: null,
	publishResponse: null,
	publishLoading: false,
	publishErrors: null,
	myVideos: null,
	myVideosLoading: false,
	myVideosErrors: null,
	removeVideoSlug: null,
	removeVideoDone: false,
	removeVideoLoading: false,
	removeVideoErrors: null,
	getVideoSlug: null,
	getVideoData: null,
	getVideoLoading: false,
	getVideoErrors: null,
	updateVideoSlug: null,
	updateVideoLoading: false,
	updateVideoErrors: null
}

const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		uploadVideoStartAction: (state, action: UploadVideoStartPayloadType) => {
			state.videoId = null
			state.videoLoading = true
			state.videoProgress = 0
			state.videoErrors = null
		},
		uploadVideoProgressAction: (state, action: ProgressPayloadType) => {
			state.videoId = null
			state.videoLoading = true
			state.videoProgress = action.payload.percent
			state.videoErrors = null
		},
		uploadVideoSuccessAction: (state, action: UploadVideoSuccessPayloadType) => {
			state.videoId = action.payload.videoId
			state.videoLoading = false
			state.videoErrors = null
		},
		uploadVideoFailedAction: (state, action: ErrorPayloadType) => {
			state.videoId = null
			state.videoLoading = false
			state.videoProgress = 0
			state.videoErrors = action.payload.error
		},
		uploadBannerStartAction: (state, action: UploadBannerStartPayloadType) => {
			state.bannerId = null
			state.bannerLoading = true
			state.bannerProgress = 0
			state.bannerErrors = null
		},
		uploadBannerProgressAction: (state, action: ProgressPayloadType) => {
			state.bannerId = null
			state.bannerLoading = true
			state.bannerProgress = action.payload.percent
			state.bannerErrors = null
		},
		uploadBannerSuccessAction: (state, action: UploadBannerSuccessPayloadType) => {
			state.bannerId = action.payload.bannerId
			state.bannerLoading = false
			state.bannerErrors = null
		},
		uploadBannerFailedAction: (state, action: ErrorPayloadType) => {
			state.bannerId = null
			state.bannerLoading = false
			state.bannerProgress = 0
			state.bannerErrors = action.payload.error
		},
		publishVideoStartAction: (state, action: PublishVideoStartPayloadType) => {
			state.publishResponse = null
			state.publishLoading = true
			state.publishErrors = null
		},
		publishVideoSuccessAction: (state, action: PublishVideoSuccessPayloadType) => {
			state.publishResponse = action.payload.data
			state.publishLoading = false
			state.publishErrors = null
		},
		publishVideoFailedAction: (state, action: ErrorPayloadType) => {
			state.publishResponse = null
			state.publishLoading = false
			state.publishErrors = action.payload.error
		},
		publishVideoResetAction: state => {
			state.videoId = null
			state.videoLoading = false
			state.videoProgress = 0
			state.videoErrors = null

			state.bannerId = null
			state.bannerLoading = false
			state.bannerProgress = 0
			state.bannerErrors = null

			state.publishResponse = null
			state.publishLoading = false
			state.publishErrors = null
		},
		getMyVideosStartAction: state => {
			state.myVideos = null
			state.myVideosLoading = true
			state.myVideosErrors = null
		},
		getMyVideosSuccessAction: (state, action: GetMyVideosSuccessPayloadType) => {
			state.myVideos = action.payload.videos
			state.myVideosLoading = false
			state.myVideosErrors = null
		},
		getMyVideosFailedAction: (state, action) => {
			state.myVideos = null
			state.myVideosLoading = false
			state.myVideosErrors = action.payload.error
		},
		removeVideoStartAction: (state, action: RemoveVideoStartPayloadType) => {
			state.removeVideoSlug = action.payload.slug
			state.removeVideoDone = false
			state.removeVideoLoading = true
			state.removeVideoErrors = null
		},
		removeVideoSuccessAction: (state, action: RemoveVideoSuccessPayloadType) => {
			state.removeVideoLoading = false
			state.removeVideoDone = true
			state.removeVideoErrors = null
		},
		removeVideoFailedAction: (state, action: ErrorPayloadType) => {
			state.removeVideoSlug = null
			state.removeVideoDone = false
			state.removeVideoLoading = false
			state.removeVideoErrors = action.payload.error
		},
		removeVideoResetAction: state => {
			state.removeVideoSlug = null
			state.removeVideoLoading = false
			state.removeVideoDone = false
			state.removeVideoErrors = null
		},
		getVideoStartAction: (state, action: GetVideoStartPayloadType) => {
			state.getVideoSlug = action.payload.slug
			state.getVideoData = null
			state.getVideoLoading = true
			state.getVideoErrors = null
		},
		getVideoSuccessAction: (state, action: GetVideoSuccessPayloadType) => {
			state.getVideoData = action.payload.video
			state.getVideoLoading = false
			state.getVideoErrors = null
		},
		getVideoFailedAction: (state, action: ErrorPayloadType) => {
			state.getVideoSlug = null
			state.getVideoData = null
			state.getVideoLoading = false
			state.getVideoErrors = action.payload.error
		},
		updateVideoStartAction: (state, action: UpdateVideoStartPayloadType) => {
			state.updateVideoSlug = action.payload.slug
			state.updateVideoLoading = true
			state.updateVideoErrors = null
		},
		updateVideoSuccessAction: (state, action: UpdateVideoSuccessPayloadType) => {
			state.updateVideoLoading = false
			state.updateVideoErrors = null
		},
		updateVideoFailedAction: (state, action: ErrorPayloadType) => {
			state.updateVideoSlug = null
			state.updateVideoLoading = false
			state.updateVideoErrors = action.payload.error
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
	getMyVideosStartAction,
	getMyVideosSuccessAction,
	getMyVideosFailedAction,
	removeVideoStartAction,
	removeVideoSuccessAction,
	removeVideoFailedAction,
	removeVideoResetAction,
	getVideoStartAction,
	getVideoSuccessAction,
	getVideoFailedAction,
	updateVideoStartAction,
	updateVideoSuccessAction,
	updateVideoFailedAction
} = videoSlice.actions
export default videoSlice.reducer
