import { PayloadAction } from '@reduxjs/toolkit'
import { BaseEntity } from 'lib/interface/base'
import { Error } from 'lib/interface/exception'

// TYPIES
export interface BaseCategory {
	title: string
	icon?: string
	banner?: string
	slug: string
}
export interface Category extends BaseEntity, BaseCategory {}
export interface CreateCategory extends BaseCategory {}
export interface CategoryNormalized {
	id: number
	userId?: string
	label: string
	value: string
	icon?: string
	banner?: string
	slug: string
}

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
	categoryList: Array<Category>
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
	create: {
		loading: boolean
		errors: Error | null
	}
}
