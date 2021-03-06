import { PayloadAction } from '@reduxjs/toolkit'
import { Error } from 'lib/types/exception'
import { Tag } from 'lib/types/tag'

// PAYLOADS
export interface CreateTagRequestPayload {
	tag: Tag
}
export interface CreateTagSuccessPayload {
	data: Tag
}
export interface CreateTagResponsePayload {
	data: Tag
}
export interface FetchTagsSuccessPayload {
	tags: Array<Tag>
}
export interface FetchTagListResponsePayload {
	data: Array<Tag>
}
export interface ErrorPayload {
	error: Error
}

// ACTION CREATORS
export interface CreateTagRequest extends PayloadAction<CreateTagRequestPayload> {}
export interface CreateTagSuccess extends PayloadAction<CreateTagSuccessPayload> {}
export interface FetchTagsSuccess extends PayloadAction<FetchTagsSuccessPayload> {}
export interface ErrorAction extends PayloadAction<ErrorPayload> {}

// ACTIONS
export type TagsActions = CreateTagRequest | FetchTagsSuccess | ErrorPayload

// STATE
export interface TagsState {
	list: {
		data: Array<Tag>
		loading: boolean
		errors: Error | null
	}
	draft: {
		loading: boolean
		errors: Error | null
	}
}
