import { StateType } from '../../core/redux/interface'

export const selectVideo = (state: StateType) => state.video
export const selectVideoData = (state: StateType) => state.video.video
export const selectVideoError = (state: StateType) => state.video.videoErrors
export const selectVideoLoading = (state: StateType) => state.video.videoLoading
export const selectVideoProgressUploading = (state: StateType) =>
	state.video.videoProgress

export const selectBanner = (state: StateType) => state.video
export const selectBannerData = (state: StateType) => state.video.video
export const selectBannerError = (state: StateType) => state.video.videoErrors
export const selectBannerLoading = (state: StateType) => state.video.videoLoading
export const selectBannerProgressUploading = (state: StateType) =>
	state.video.videoProgress
