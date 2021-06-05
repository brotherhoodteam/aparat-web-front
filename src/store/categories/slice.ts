import { createSlice } from '@reduxjs/toolkit'
import {
	SetCategoryStartPayloadType,
	GetCategoriesSuccessPayloadType,
	ErrorPayloadType,
	CategoriesStateType,
	SetCategorySuccessPayloadType
} from './interface'

const initialState: CategoriesStateType = {
	data: [],
	fetchDataLoading: false,
	fetchDataError: null,
	addItemLoading: false,
	addItemError: null
}

const tagsSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		getCategoriesStartAction: (state, action) => {
			state.data = []
			state.fetchDataLoading = true
			state.fetchDataError = null
		},
		getCategoriesSuccessAction: (state, action: GetCategoriesSuccessPayloadType) => {
			state.data = action.payload.categories
			state.fetchDataLoading = false
			state.fetchDataError = null
		},
		getCategoriesFailedAction: (state, action: ErrorPayloadType) => {
			state.data = []
			state.fetchDataLoading = false
			state.fetchDataError = action.payload.error
		},
		setCategoryStartAction: (state, action: SetCategoryStartPayloadType) => {
			state.addItemLoading = true
			state.addItemError = null
		},
		setCategorySuccessAction: (state, action: SetCategorySuccessPayloadType) => {
			state.data.push(action.payload.category)
			state.addItemLoading = false
			state.addItemError = null
		},
		setCategoryFailedAction: (state, action: ErrorPayloadType) => {
			state.addItemLoading = false
			state.addItemError = action.payload.error
		}
	}
})

export const {
	getCategoriesStartAction,
	getCategoriesSuccessAction,
	getCategoriesFailedAction,
	setCategoryStartAction,
	setCategorySuccessAction,
	setCategoryFailedAction
} = tagsSlice.actions
export default tagsSlice.reducer
