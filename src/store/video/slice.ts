import { createSlice } from '@reduxjs/toolkit'
import {
	UploadFileStartPayloadType,
	UploadFileSuccessPayloadType,
	UploadFileErrorPayloadType,
	VideoStateType
} from './interface'

const initialState: VideoStateType = {
	data: null,
	loading: false,
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
		},
		uploadFileSuccessAction: (state, action: UploadFileSuccessPayloadType) => {
			state.data = action.payload.data
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

export const { uploadFileStartAction, uploadFileSuccessAction, uploadFileFailedAction } =
	videoSlice.actions
export default videoSlice.reducer
