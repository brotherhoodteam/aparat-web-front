import { createSlice } from '@reduxjs/toolkit'
import {
	CreateCategoryRequest,
	FetchCategoryListSuccess,
	ErrorAction,
	CategoriesState,
	CreateCategorySuccess
} from './types'

const initialState: CategoriesState = {
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
	name: 'categories',
	initialState,
	reducers: {
		fetchCategoryListRequest: state => {
			state.list.data = []
			state.list.loading = true
			state.list.errors = null
		},
		fetchCategoryListSuccess: (state, action: FetchCategoryListSuccess) => {
			state.list.data = action.payload.data
			state.list.loading = false
			state.list.errors = null
		},
		fetchCategoryListFailure: (state, action: ErrorAction) => {
			state.list.data = []
			state.list.loading = false
			state.list.errors = action.payload.error
		},
		createCategoryRequest: (state, action: CreateCategoryRequest) => {
			state.draft.loading = true
			state.draft.errors = null
		},
		createCategorySuccess: (state, action: CreateCategorySuccess) => {
			state.list.data.push(action.payload.category)
			state.draft.loading = false
			state.draft.errors = null
		},
		createCategoryFailure: (state, action: ErrorAction) => {
			state.draft.loading = false
			state.draft.errors = action.payload.error
		}
	}
})

export const {
	fetchCategoryListRequest,
	fetchCategoryListSuccess,
	fetchCategoryListFailure,
	createCategoryRequest,
	createCategorySuccess,
	createCategoryFailure
} = tagsSlice.actions
export default tagsSlice.reducer
