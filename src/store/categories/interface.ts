import { PayloadAction } from '@reduxjs/toolkit'
import { BaseEntity } from '../../interface/base-entity'

// Models
export interface CategoryType extends BaseEntity {
	title: string
	icon?: string
	banner?: string
	slug?: string
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
export type CategoriesListResponseType = {
	data: Array<CategoryType>
}
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
