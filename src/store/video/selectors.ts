import { StateType } from '../../core/redux/interface'

export const selectVideo = (state: StateType) => state.video
export const selectVideoFile = (state: StateType) => state.video.file
export const selectVideoData = (state: StateType) => state.video.data
