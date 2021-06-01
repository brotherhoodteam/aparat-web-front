import { createSlice } from '@reduxjs/toolkit'
import {
	ErrorActionPayloadType,
	SetCategoryStartActionPayloadType,
	TagsStateType,
	GetCategoriesSuccessActionPayloadType
} from './interface'

import { data } from './seed'

const initialState: TagsStateType = {
	categoriesData: [],
	categoriesLoading: false,
	categoriesError: null,
	categoryData: null,
	categoryLoading: false,
	categoryError: null
}

const tagsSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		getCategoriesStartAction: (state, action) => {
			state.categoriesData = []
			state.categoriesLoading = true
			state.categoriesError = null
		},
		getCategoriesSuccessAction: (
			state,
			action: GetCategoriesSuccessActionPayloadType
		) => {
			state.categoriesData = action.payload.categoriesData
			state.categoriesLoading = false
			state.categoriesError = null
		},
		getCategoriesFailedAction: (state, action: ErrorActionPayloadType) => {
			state.categoriesData = []
			state.categoriesLoading = false
			state.categoriesError = action.payload.error
		},
		setCategoryStartAction: (state, action: SetCategoryStartActionPayloadType) => {
			state.categoryData = action.payload.categoryData
			state.categoryLoading = true
			state.categoryError = null
		},
		setCategorySuccessAction: (state, action) => {
			state.categoryData = null
			state.categoryLoading = false
			state.categoryError = action.payload.error
		},
		setCategoryFailedAction: (state, action: ErrorActionPayloadType) => {
			state.categoryData = null
			state.categoryLoading = true
			state.categoryError = action.payload.error
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
