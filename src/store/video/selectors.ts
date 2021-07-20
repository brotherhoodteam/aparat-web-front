import { createSelector } from 'reselect'
import { State } from 'config/redux/interface'

export const selectVideoStore = (state: State) => state.video

export const selectPost = createSelector([selectVideoStore], video => video.post)
export const selectDeletedPost = createSelector(
	[selectVideoStore],
	video => video.deletePost
)
export const selectVideo = createSelector([selectVideoStore], video => video.single)
export const selectVideoStatistics = createSelector(
	[selectVideoStore],
	video => video.statistics
)
export const selectVideoList = createSelector([selectVideoStore], video => video.list)
export const selectUploadedVideo = createSelector(
	[selectVideoStore],
	video => video.uploadVideo
)
export const selectUploadBanner = createSelector(
	[selectVideoStore],
	video => video.uploadBanner
)
