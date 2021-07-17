import { createSlice } from '@reduxjs/toolkit'
import {
	ErrorAction,
	CreateTagRequest,
	TagsState,
	FetchTagsSuccess,
	CreateTagSuccess
} from './interface'

const initialState: TagsState = {
	list: {
		data: [],
		loading: false,
		errors: null
	},
	create: {
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
			state.create.loading = true
			state.create.errors = null
		},
		createTagSuccess: (state, action: CreateTagSuccess) => {
			state.create.loading = false
			state.list.data.push(action.payload.tag)
			state.create.errors = null
		},
		createTagFailure: (state, action: ErrorAction) => {
			state.create.loading = false
			state.create.errors = action.payload.error
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
