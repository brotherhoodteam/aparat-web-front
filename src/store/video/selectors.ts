import { StateType } from '../../core/redux/interface'

export const selectVideo = (state: StateType) => state.video

export const selectVideoData = (state: StateType) => state.video.videoId
export const selectVideoError = (state: StateType) => state.video.videoErrors
export const selectVideoLoading = (state: StateType) => state.video.videoLoading
export const selectVideoUploadProgress = (state: StateType) => state.video.videoProgress

export const selectBannerData = (state: StateType) => state.video.bannerId
export const selectBannerError = (state: StateType) => state.video.bannerErrors
export const selectBannerLoading = (state: StateType) => state.video.bannerLoading
export const selectBannerUploadProgress = (state: StateType) => state.video.bannerProgress
