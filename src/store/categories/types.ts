import { PayloadAction } from '@reduxjs/toolkit'
import { BaseCategory, Category } from 'lib/types/category'
import { Error } from 'lib/types/exception'

// TYPIES
export interface CreateCategory extends BaseCategory {}

// PAYLOAD
export interface CreateCategoryRequestPayload {
	category: CreateCategory
}
export interface CreateCategorySuccessPayload {
	category: Category
}
export interface CreateCategoryResponsePayload {
	data: Category
}
export interface FetchCategoryListSuccessPayload {
	data: Array<Category>
}
export interface FetchCategoryListResponsePayload {
	data: Array<Category>
}
export interface ErrorPayload {
	error: Error
}

// ACTIONS
export interface CreateCategoryRequest
	extends PayloadAction<CreateCategoryRequestPayload> {}
export interface CreateCategorySuccess
	extends PayloadAction<CreateCategorySuccessPayload> {}

export interface FetchCategoryListSuccess
	extends PayloadAction<FetchCategoryListSuccessPayload> {}

export interface ErrorAction extends PayloadAction<ErrorPayload> {}

// ACTIONS
export type CategoriesActionType =
	| CreateCategoryRequest
	| FetchCategoryListSuccess
	| ErrorAction

// STATE
export interface CategoriesState {
	list: {
		data: Array<Category>
		loading: boolean
		errors: Error | null
	}
	draft: {
		loading: boolean
		errors: Error | null
	}
}
