import { PayloadAction } from '@reduxjs/toolkit'
import { BaseEntity } from '../../interface/base'
import { ErrorType } from '../../interface/exception'

// Models
export interface CategoryType extends BaseEntity {
	title: string
	icon?: string
	banner?: string
	slug: string
}
export interface CreateCategoryType {
	title: string
	slug: string
	icon: string
	banner_id?: string
}
export interface CategoryNormalizedType {
	id: number
	userId?: string
	label: string
	value: string
	icon?: string
	banner?: string
	slug: string
}

// Data Interface
export interface CategoryDataType {
	data: CategoryType
}
export interface CategoriesDataType {
	data: Array<CategoryType>
}
export interface CreateCategoryDataType {
	data: { title: string; slug: string; icon: string; banner_id?: string }
}
export interface ErrorDataType {
	error: ErrorType
}

// Payloads
export interface SetCategoryStartActionPayloadType
	extends PayloadAction<CreateCategoryDataType> {}

export interface SetCategorySuccessActionPayloadType
	extends PayloadAction<CategoryDataType> {}

export interface GetCategoriesSuccessActionPayloadType
	extends PayloadAction<CategoriesDataType> {}

export interface ErrorActionPayloadType extends PayloadAction<ErrorDataType> {}

// Response
export type CategoriesDataResponseType = {
	data: Array<CategoryType>
}
export type CategoryDataResponseType = {
	data: CategoryType
}
// Actions
export type CategoriesActionType =
	| SetCategoryStartActionPayloadType
	| GetCategoriesSuccessActionPayloadType
	| ErrorActionPayloadType

// State
export interface CategoriesStateType {
	data: Array<CategoryType>
	fetchDataLoading: boolean
	fetchDataError: ErrorType | null
	addItemLoading: boolean
	addItemError: ErrorType | null
}
