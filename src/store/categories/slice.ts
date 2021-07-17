import { createSlice } from '@reduxjs/toolkit'
import {
	CreateCategoryRequest,
	FetchCategoryListSuccess,
	ErrorAction,
	CategoriesState,
	CreateCategorySuccess
} from './interface'

const initialState: CategoriesState = {
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
	name: 'categories',
	initialState,
	reducers: {
		fetchCategoryListRequest: state => {
			state.list.data = []
			state.list.loading = true
			state.list.errors = null
		},
		fetchCategoryListSuccess: (state, action: FetchCategoryListSuccess) => {
			state.list.data = action.payload.categoryList
			state.list.loading = true
			state.list.errors = null
		},
		fetchCategoryListFailure: (state, action: ErrorAction) => {
			state.list.data = []
			state.list.loading = true
			state.list.errors = action.payload.error
		},
		createCategoryRequest: (state, action: CreateCategoryRequest) => {
			state.create.loading = true
			state.create.errors = null
		},
		createCategorySuccess: (state, action: CreateCategorySuccess) => {
			state.list.data.push(action.payload.category)
			state.create.loading = false
			state.create.errors = null
		},
		createCategoryFailure: (state, action: ErrorAction) => {
			state.create.loading = false
			state.create.errors = action.payload.error
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
