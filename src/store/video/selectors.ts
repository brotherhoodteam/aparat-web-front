import { createSelector } from 'reselect'
import { StateType } from 'core/redux/interface'

export const selectVideo = (state: StateType) => state.video
export const selectUploadVideo = createSelector([selectVideo], video => video.upload)
export const selectUploadBanner = createSelector(
	[selectVideo],
	video => video.uploadBanner
)
export const selectListVideo = createSelector([selectVideo], video => video.list)
export const selectrDeleteVideo = createSelector([selectVideo], video => video.delete)
export const selectGetVideo = createSelector([selectVideo], video => video.get)
export const selectPublishVideo = createSelector([selectVideo], video => video.publish)
