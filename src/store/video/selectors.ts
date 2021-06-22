import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'

export const selectVideo = (state: StateType) => state.video

export const selectVideoData = createSelector([selectVideo], video => video.videoId)
export const selectVideoError = createSelector([selectVideo], video => video.videoErrors)
export const selectVideoLoading = createSelector(
	[selectVideo],
	video => video.videoLoading
)
export const selectVideoUploadProgress = createSelector(
	[selectVideo],
	video => video.videoProgress
)

export const selectBannerData = createSelector([selectVideo], video => video.bannerId)
export const selectBannerError = createSelector(
	[selectVideo],
	video => video.bannerErrors
)
export const selectBannerLoading = createSelector(
	[selectVideo],
	video => video.bannerLoading
)
export const selectBannerUploadProgress = createSelector(
	[selectVideo],
	video => video.bannerProgress
)
export const selectPublishData = createSelector(
	[selectVideo],
	video => video.publishResponse
)
export const selectPublishLoading = createSelector(
	[selectVideo],
	video => video.publishLoading
)
export const selectPublishError = createSelector(
	[selectVideo],
	video => video.publishErrors
)
