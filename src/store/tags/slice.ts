import { createSlice } from '@reduxjs/toolkit'
import {
	ErrorPayloadType,
	SetTagStartPayloadType,
	TagsStateType,
	GetTagsSuccessPayloadType,
	SetTagSuccessPayloadType
} from './interface'

const initialState: TagsStateType = {
	list: {
		data: [],
		loading: false,
		errors: null
	},
	set: {
		loading: false,
		errors: null
	}
}

const tagsSlice = createSlice({
	name: 'tags',
	initialState,
	reducers: {
		getTagsStartAction: state => {
			state.list.data = []
			state.list.loading = true
			state.list.errors = null
		},
		getTagsSuccessAction: (state, action: GetTagsSuccessPayloadType) => {
			state.list.data = action.payload.tags
			state.list.loading = false
			state.list.errors = null
		},
		getTagsFailedAction: (state, action: ErrorPayloadType) => {
			state.list.data = []
			state.list.loading = false
			state.list.errors = action.payload.error
		},
		setTagStartAction: (state, action: SetTagStartPayloadType) => {
			state.set.loading = true
			state.set.errors = null
		},
		setTagSuccessAction: (state, action: SetTagSuccessPayloadType) => {
			state.set.loading = false
			state.list.data.push(action.payload.tag)
			state.set.errors = null
		},
		setTagFailedAction: (state, action: ErrorPayloadType) => {
			state.set.loading = false
			state.set.errors = action.payload.error
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
