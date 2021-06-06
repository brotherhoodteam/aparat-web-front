import { StateType } from '../../core/redux/interface'

export const selectVideo = (state: StateType) => state.video
export const selectVideoData = (state: StateType) => state.video.data
export const selectProgressUploadingFile = (state: StateType) => state.video.percent
