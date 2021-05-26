import { createSlice } from '@reduxjs/toolkit'
import {
	FileUploadErrorPayloadType,
	FileUploadStartPayloadType,
	FileUploadSuccessPayloadType,
	VideoStateType
} from './interface'

const initialState: VideoStateType = {
	file: null,
	data: null,
	error: null
}

const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {
		fileUploadStartAction: (state, action: FileUploadStartPayloadType) => {
			state.file = action.payload.file
			state.data = null
			state.error = null
		},
		fileUploadSuccessAction: (state, action: FileUploadSuccessPayloadType) => {
			state.data = action.payload.data
			state.file = null
			state.error = null
		},
		fileUploadFailedAction: (state, action: FileUploadErrorPayloadType) => {
			state.error = action.payload.error
			state.data = null
			state.file = null
		}
	}
})

export const { fileUploadStartAction, fileUploadSuccessAction, fileUploadFailedAction } =
	videoSlice.actions
export default videoSlice.reducer
