import { StateType } from '../../core/redux/interface'

export const selectVideo = (state: StateType) => state.video
export const selectVideoData = (state: StateType) => state.video.data
export const selectVideoError = (state: StateType) => state.video.error
export const selectVideoLoading = (state: StateType) => state.video.loading
export const selectVideoProgressUploading = (state: StateType) => state.video.percent
