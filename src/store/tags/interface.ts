import { PayloadAction } from '@reduxjs/toolkit'

// Models
export type TagType = {
	id: number
	title: string
}
export type ErrorType = {
	message: string
	status: number | string
}

// Data Interface
export interface TagDataType {
	data: TagType
}
export interface TagsDataType {
	tagsData: Array<TagType>
}
export interface ErrorDataType {
	error: ErrorType
}

// Payload
export interface SetTagStartActionPayloadType extends PayloadAction<TagDataType> {}
export interface SetTagSuccessActionPayloadType extends PayloadAction<TagDataType> {}
export interface GetTagsSuccessActionPayloadType extends PayloadAction<TagsDataType> {}
export interface ErrorActionPayloadType extends PayloadAction<ErrorDataType> {}

// Response
export interface TagsDataResponseType {
	data: Array<TagType>
}
export interface TagDataResponseType {
	data: TagType
}
// Actions
export type TagsActionType =
	| SetTagStartActionPayloadType
	| GetTagsSuccessActionPayloadType
	| ErrorActionPayloadType

// State
export interface TagsStateType {
	data: Array<TagType>
	fetchDataLoading: boolean
	fetchDataError: ErrorType | null
	addItemLoading: boolean
	addItemError: ErrorType | null
}
