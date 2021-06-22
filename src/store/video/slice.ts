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
	ProgressPayloadType
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
	publishErrors: null
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
		publishVideoStart: (state, action: PublishVideoStartPayloadType) => {
			state.publishResponse = null
			state.publishLoading = true
			state.publishErrors = null
		},
		publishVideoSuccess: (state, action: PublishVideoSuccessPayloadType) => {
			state.publishResponse = action.payload.data
			state.publishLoading = false
			state.publishErrors = null
		},
		publishVideoFailed: (state, action: ErrorPayloadType) => {
			state.publishResponse = null
			state.publishLoading = false
			state.publishErrors = action.payload.error
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
	publishVideoStart,
	publishVideoSuccess,
	publishVideoFailed
} = videoSlice.actions
export default videoSlice.reducer
