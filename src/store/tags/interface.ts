import { PayloadAction } from '@reduxjs/toolkit'
import { ErrorType } from 'interface/exception'

// Inrface
export type TagType = {
	id: number
	title: string
}

// Data Interface
export interface TagDataType {
	tag: TagType
}
export interface TagsDataType {
	tags: Array<TagType>
}
export interface ErrorDataType {
	error: ErrorType
}

// Payload
export interface SetTagStartPayloadType extends PayloadAction<TagDataType> {}
export interface SetTagSuccessPayloadType extends PayloadAction<TagDataType> {}
export interface GetTagsSuccessPayloadType extends PayloadAction<TagsDataType> {}
export interface ErrorPayloadType extends PayloadAction<ErrorDataType> {}

// Response
export interface TagDataResponseType {
	data: TagType
}
export interface TagsDataResponseType {
	data: Array<TagType>
}

// Actions
export type TagsActionType =
	| SetTagStartPayloadType
	| GetTagsSuccessPayloadType
	| ErrorPayloadType

// State
export interface TagsStateType {
	list: {
		data: Array<TagType>
		loading: boolean
		errors: ErrorType | null
	}
	set: {
		loading: boolean
		errors: ErrorType | null
	}
}
