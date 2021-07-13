import { PayloadAction } from '@reduxjs/toolkit'
import { BaseEntity } from 'core/interface/base'
import { ErrorType } from 'core/interface/exception'

// Base
export interface BaseCategory {
	title: string
	icon?: string
	banner?: string
	slug: string
}
export interface CategoryType extends BaseEntity, BaseCategory {}
export interface CreateCategoryType extends BaseCategory {}

// Transfrom Interface
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
	category: CategoryType
}
export interface CategoriesDataType {
	categories: Array<CategoryType>
}
export interface CreateCategoryDataType {
	category: CreateCategoryType
}
export interface ErrorDataType {
	error: ErrorType
}

// Payloads
//set
export interface SetCategoryStartPayloadType
	extends PayloadAction<CreateCategoryDataType> {}
export interface SetCategorySuccessPayloadType extends PayloadAction<CategoryDataType> {}
// get
export interface GetCategoriesSuccessPayloadType
	extends PayloadAction<CategoriesDataType> {}
// error
export interface ErrorPayloadType extends PayloadAction<ErrorDataType> {}

// Response
export interface CategoryDataResponseType {
	data: CategoryType
}
export interface CategoriesDataResponseType {
	data: Array<CategoryType>
}

// Actions
export type CategoriesActionType =
	| SetCategoryStartPayloadType
	| GetCategoriesSuccessPayloadType
	| ErrorPayloadType

// State
export interface CategoriesStateType {
	list: {
		data: Array<CategoryType>
		loading: boolean
		errors: ErrorType | null
	}
	set: {
		loading: boolean
		errors: ErrorType | null
	}
}
