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
	video: null,
	videoLoading: false,
	videoProgress: 0,
	videoErrors: null,
	banner: null,
	bannerLoading: false,
	bannerProgress: 0,
	bannerErrors: null
}

const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		uploadVideoStartAction: (state, action: UploadVideoStartPayloadType) => {
			state.video = null
			state.videoLoading = true
			state.videoProgress = 0
			state.videoErrors = null
		},
		uploadVideoProgressAction: (state, action: UploadProgressPayloadType) => {
			state.video = null
			state.videoLoading = true
			state.videoProgress = action.payload.percent
			state.videoErrors = null
		},
		uploadVideoSuccessAction: (state, action: UploadVideoSuccessPayloadType) => {
			state.video = action.payload.video
			state.videoLoading = false
			state.videoProgress = 0
			state.videoErrors = null
		},
		uploadVideoFailedAction: (state, action: UploadErrorPayloadType) => {
			state.video = null
			state.videoLoading = false
			state.videoProgress = 0
			state.videoErrors = action.payload.error
		},
		uploadBannerStartAction: (state, action: UploadBannerStartPayloadType) => {
			state.banner = null
			state.bannerLoading = true
			state.bannerProgress = 0
			state.bannerErrors = null
		},
		uploadBannerProgressAction: (state, action: UploadProgressPayloadType) => {
			state.banner = null
			state.bannerLoading = true
			state.bannerProgress = action.payload.percent
			state.bannerErrors = null
		},
		uploadBannerSuccessAction: (state, action: UploadBannerSuccessPayloadType) => {
			state.banner = action.payload.banner
			state.bannerLoading = false
			state.bannerProgress = 0
			state.bannerErrors = null
		},
		uploadBannerFailedAction: (state, action: UploadErrorPayloadType) => {
			state.banner = null
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
	uploadVideoFailedAction
} = videoSlice.actions
export default videoSlice.reducer
