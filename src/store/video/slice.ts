import { createSlice } from '@reduxjs/toolkit'
import {
	UploadVideoStartPayloadType,
	UploadVideoSuccessPayloadType,
	UploadErrorPayloadType,
	VideoStateType,
	UploadProgressPayloadType,
	UploadBannerStartPayloadType,
	UploadBannerSuccessPayloadType
} from './interface'

const initialState: VideoStateType = {
	videoId: null,
	videoLoading: false,
	videoProgress: 0,
	videoErrors: null,
	bannerId: null,
	bannerLoading: false,
	bannerProgress: 0,
	bannerErrors: null
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
		uploadVideoProgressAction: (state, action: UploadProgressPayloadType) => {
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
		uploadVideoFailedAction: (state, action: UploadErrorPayloadType) => {
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
		uploadBannerProgressAction: (state, action: UploadProgressPayloadType) => {
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
		uploadBannerFailedAction: (state, action: UploadErrorPayloadType) => {
			state.bannerId = null
			state.bannerLoading = false
			state.bannerProgress = 0
			state.bannerErrors = action.payload.error
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
	uploadBannerFailedAction
} = videoSlice.actions
export default videoSlice.reducer
