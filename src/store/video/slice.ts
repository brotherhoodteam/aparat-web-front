import { createSlice } from '@reduxjs/toolkit'
import {
	UploadFileStartPayloadType,
	UploadFileSuccessPayloadType,
	UploadFileErrorPayloadType,
	VideoStateType,
	UploadFileProgressPayloadType
} from './interface'

const initialState: VideoStateType = {
	data: null,
	loading: false,
	percent: 0,
	error: null
}

const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		uploadFileStartAction: (state, action: UploadFileStartPayloadType) => {
			state.data = null
			state.loading = true
			state.error = null
			state.percent = 0
		},
		uploadFileProgressAction: (state, action: UploadFileProgressPayloadType) => {
			state.data = null
			state.percent = action.payload.percent
			state.loading = true
			state.error = null
		},
		uploadFileSuccessAction: (state, action: UploadFileSuccessPayloadType) => {
			state.data = action.payload.video
			state.loading = false
			state.error = null
		},
		uploadFileFailedAction: (state, action: UploadFileErrorPayloadType) => {
			state.error = action.payload.error
			state.loading = false
			state.data = null
		}
	}
})

export const {
	uploadFileStartAction,
	uploadFileProgressAction,
	uploadFileSuccessAction,
	uploadFileFailedAction
} = videoSlice.actions
export default videoSlice.reducer
