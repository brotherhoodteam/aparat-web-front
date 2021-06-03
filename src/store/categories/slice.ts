import { createSlice } from '@reduxjs/toolkit'
import {
	ErrorActionPayloadType,
	SetCategoryStartActionPayloadType,
	CategoriesStateType,
	GetCategoriesSuccessActionPayloadType
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
		getCategoriesSuccessAction: (
			state,
			action: GetCategoriesSuccessActionPayloadType
		) => {
			state.data = action.payload.categoriesData
			state.fetchDataLoading = false
			state.fetchDataError = null
		},
		getCategoriesFailedAction: (state, action: ErrorActionPayloadType) => {
			state.data = []
			state.fetchDataLoading = false
			state.fetchDataError = action.payload.error
		},
		setCategoryStartAction: (state, action: SetCategoryStartActionPayloadType) => {
			state.addItemLoading = true
			state.addItemError = null
		},
		setCategorySuccessAction: (state, action) => {
			state.addItemLoading = false
			state.addItemError = action.payload.error
		},
		setCategoryFailedAction: (state, action: ErrorActionPayloadType) => {
			state.addItemLoading = true
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
