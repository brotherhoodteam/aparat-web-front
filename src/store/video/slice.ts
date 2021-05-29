import { createSlice } from '@reduxjs/toolkit'
import {
	UploadFileStartActionPayloadType,
	UploadFileSuccessActionPayloadType,
	UploadFileErrorActionPayloadType,
	VideoStateType
} from './interface'

const initialState: VideoStateType = {
	data: null,
	error: null,
	loading: false
}

const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		uploadFileStartAction: (state, action: UploadFileStartActionPayloadType) => {
			state.data = null
			state.loading = true
			state.error = null
		},
		uploadFileSuccessAction: (state, action: UploadFileSuccessActionPayloadType) => {
			state.data = action.payload.data
			state.loading = false
			state.error = null
		},
		uploadFileFailedAction: (state, action: UploadFileErrorActionPayloadType) => {
			state.error = action.payload.error
			state.loading = false
			state.data = null
		}
	}
})

export const { uploadFileStartAction, uploadFileSuccessAction, uploadFileFailedAction } =
	videoSlice.actions
export default videoSlice.reducer
