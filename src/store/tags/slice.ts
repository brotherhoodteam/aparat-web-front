import { createSlice } from '@reduxjs/toolkit'
import {
	ErrorActionPayloadType,
	SetTagStartActionPayloadType,
	TagsStateType,
	GetTagsSuccessActionPayloadType
} from './interface'

const initialState: TagsStateType = {
	tagsData: [],
	tagsLoading: false,
	tagsError: null,
	tagData: null,
	tagLoading: false,
	tagError: null
}

const tagsSlice = createSlice({
	name: 'tags',
	initialState,
	reducers: {
		getTagsStartAction: (state, action) => {
			state.tagsData = []
			state.tagsLoading = true
			state.tagsError = null
		},
		getTagsSuccessAction: (state, action: GetTagsSuccessActionPayloadType) => {
			state.tagsData = action.payload.tagsData
			state.tagsLoading = false
			state.tagsError = null
		},
		getTagsFailedAction: (state, action: ErrorActionPayloadType) => {
			state.tagsData = []
			state.tagsLoading = false
			state.tagsError = action.payload.error
		},
		setTagStartAction: (state, action: SetTagStartActionPayloadType) => {
			state.tagData = action.payload.tagData
			state.tagLoading = true
			state.tagError = null
		},
		setTagSuccessAction: (state, action) => {
			state.tagData = null
			state.tagLoading = false
			state.tagError = action.payload.error
		},
		setTagFailedAction: (state, action: ErrorActionPayloadType) => {
			state.tagData = null
			state.tagLoading = true
			state.tagError = action.payload.error
		}
	}
})

export const {
	getTagsStartAction,
	getTagsSuccessAction,
	getTagsFailedAction,
	setTagStartAction,
	setTagSuccessAction,
	setTagFailedAction
} = tagsSlice.actions
export default tagsSlice.reducer
