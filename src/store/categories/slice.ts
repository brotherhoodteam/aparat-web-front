import { createSlice } from '@reduxjs/toolkit'
import {
	SetCategoryStartPayloadType,
	GetCategoriesSuccessPayloadType,
	ErrorPayloadType,
	CategoriesStateType,
	SetCategorySuccessPayloadType
} from './interface'

const initialState: CategoriesStateType = {
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
	name: 'categories',
	initialState,
	reducers: {
		getCategoryListStartAction: state => {
			state.list.data = []
			state.list.loading = true
			state.list.errors = null
		},
		getCategoryListSuccessAction: (state, action: GetCategoriesSuccessPayloadType) => {
			state.list.data = action.payload.categories
			state.list.loading = true
			state.list.errors = null
		},
		getCategoryListFailedAction: (state, action: ErrorPayloadType) => {
			state.list.data = []
			state.list.loading = true
			state.list.errors = action.payload.error
		},
		setCategoryStartAction: (state, action: SetCategoryStartPayloadType) => {
			state.set.loading = true
			state.set.errors = null
		},
		setCategorySuccessAction: (state, action: SetCategorySuccessPayloadType) => {
			state.list.data.push(action.payload.category)
			state.set.loading = false
			state.set.errors = null
		},
		setCategoryFailedAction: (state, action: ErrorPayloadType) => {
			state.set.loading = false
			state.set.errors = action.payload.error
		}
	}
})

export const {
	getCategoryListStartAction,
	getCategoryListSuccessAction,
	getCategoryListFailedAction,
	setCategoryStartAction,
	setCategorySuccessAction,
	setCategoryFailedAction
} = tagsSlice.actions
export default tagsSlice.reducer
