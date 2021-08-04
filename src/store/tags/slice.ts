import { createSlice } from '@reduxjs/toolkit'
import {
	ErrorAction,
	CreateTagRequest,
	TagsState,
	FetchTagsSuccess,
	CreateTagSuccess
} from './types'

const initialState: TagsState = {
	list: {
		data: [],
		loading: false,
		errors: null
	},
	draft: {
		loading: false,
		errors: null
	}
}

const tagsSlice = createSlice({
	name: 'tags',
	initialState,
	reducers: {
		fetchTagListRequest: state => {
			state.list.data = []
			state.list.loading = true
			state.list.errors = null
		},
		fetchTagListSuccess: (state, action: FetchTagsSuccess) => {
			state.list.data = action.payload.tags
			state.list.loading = false
			state.list.errors = null
		},
		fetchTagListFailure: (state, action: ErrorAction) => {
			state.list.data = []
			state.list.loading = false
			state.list.errors = action.payload.error
		},
		createTagRequest: (state, action: CreateTagRequest) => {
			state.draft.loading = true
			state.draft.errors = null
		},
		createTagSuccess: (state, action: CreateTagSuccess) => {
			state.draft.loading = false
			state.list.data.push(action.payload.data)
			state.draft.errors = null
		},
		createTagFailure: (state, action: ErrorAction) => {
			state.draft.loading = false
			state.draft.errors = action.payload.error
		}
	}
})

export const {
	fetchTagListRequest,
	fetchTagListSuccess,
	fetchTagListFailure,
	createTagRequest,
	createTagSuccess,
	createTagFailure
} = tagsSlice.actions
export default tagsSlice.reducer
