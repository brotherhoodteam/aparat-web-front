import { PayloadAction } from '@reduxjs/toolkit'

// Models
export type CategoryType = {
	id: string | number
	label: string
	icon: string
	to: string
}
export type ErrorType = {
	message: string
	status: number | string
}

// Data Interface
export interface CatrgoryDataType {
	categoryData: CategoryType
}
export interface CategoriesDataType {
	categoriesData: Array<CategoryType>
}
export interface ErrorDataType {
	error: ErrorType
}

// Payload
export interface SetCategoryStartActionPayloadType
	extends PayloadAction<CatrgoryDataType> {}
export interface GetCategoriesSuccessActionPayloadType
	extends PayloadAction<CategoriesDataType> {}
export interface ErrorActionPayloadType extends PayloadAction<ErrorDataType> {}

// Response

// Actions
export type TagsActionType =
	| SetCategoryStartActionPayloadType
	| GetCategoriesSuccessActionPayloadType
	| ErrorActionPayloadType

// State
export interface TagsStateType {
	categoriesData: Array<CategoryType> | []
	categoriesLoading: boolean
	categoriesError: ErrorType | null
	categoryData: CategoryType | null
	categoryLoading: boolean
	categoryError: ErrorType | null
}
