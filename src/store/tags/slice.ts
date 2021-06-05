import { createSlice } from '@reduxjs/toolkit'
import {
	ErrorPayloadType,
	SetTagStartPayloadType,
	TagsStateType,
	GetTagsSuccessPayloadType,
	SetTagSuccessPayloadType
} from './interface'

const initialState: TagsStateType = {
	data: [],
	fetchDataLoading: false,
	fetchDataError: null,
	addItemLoading: false,
	addItemError: null
}

const tagsSlice = createSlice({
	name: 'tags',
	initialState,
	reducers: {
		getTagsStartAction: state => {
			state.data = []
			state.fetchDataLoading = true
			state.fetchDataError = null
		},
		getTagsSuccessAction: (state, action: GetTagsSuccessPayloadType) => {
			state.data = action.payload.tags
			state.fetchDataLoading = false
			state.fetchDataError = null
		},
		getTagsFailedAction: (state, action: ErrorPayloadType) => {
			state.data = []
			state.fetchDataLoading = false
			state.fetchDataError = action.payload.error
		},
		setTagStartAction: (state, action: SetTagStartPayloadType) => {
			state.addItemLoading = true
			state.addItemError = null
		},
		setTagSuccessAction: (state, action: SetTagSuccessPayloadType) => {
			state.addItemLoading = false
			state.data.push(action.payload.tag)
			state.addItemError = null
		},
		setTagFailedAction: (state, action: ErrorPayloadType) => {
			state.addItemLoading = false
			state.addItemError = action.payload.error
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
