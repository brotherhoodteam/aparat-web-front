import { createSlice } from '@reduxjs/toolkit'
import {
	ErrorActionPayloadType,
	SetTagStartActionPayloadType,
	TagsStateType,
	GetTagsSuccessActionPayloadType,
	SetTagSuccessActionPayloadType
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
		getTagsSuccessAction: (state, action: GetTagsSuccessActionPayloadType) => {
			state.data = action.payload.tagsData
			state.fetchDataLoading = false
			state.fetchDataError = null
		},
		getTagsFailedAction: (state, action: ErrorActionPayloadType) => {
			state.data = []
			state.fetchDataLoading = false
			state.fetchDataError = action.payload.error
		},
		setTagStartAction: (state, action: SetTagStartActionPayloadType) => {
			state.addItemLoading = true
			state.addItemError = null
		},
		setTagSuccessAction: (state, action: SetTagSuccessActionPayloadType) => {
			state.addItemLoading = false
			// const tag = action.payload.data
			// action.payload.data
			state.data.push(action.payload.data)
			console.log('action.payload.data', action.payload.data)
			state.addItemError = null
		},
		setTagFailedAction: (state, action: ErrorActionPayloadType) => {
			state.addItemLoading = true
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
