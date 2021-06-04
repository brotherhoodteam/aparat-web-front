import { PayloadAction } from '@reduxjs/toolkit'
import { BaseEntity } from '../../interface/base'
import { ErrorType } from '../../interface/exception'

// Models
export interface PlaylistType extends BaseEntity {
	title: string
	size: number
}
export interface CreatePlaylistType {
	title: string
}
export interface PlaylistNormalizedType {
	id: number
	userId?: string
	label: string
	value: number
}

// Data Interface
export interface PlaylistDataType {
	data: PlaylistType
}
export interface PlaylistsDataType {
	data: Array<PlaylistType>
}
export interface CreatePlaylistDataType {
	data: { title: string }
}
export interface ErrorDataType {
	error: ErrorType
}

// Payloads
export interface SetPlaylistStartActionPayloadType
	extends PayloadAction<CreatePlaylistDataType> {}

export interface SetPlaylistSuccessActionPayloadType
	extends PayloadAction<PlaylistDataType> {}

export interface GetPlaylistsSuccessActionPayloadType
	extends PayloadAction<PlaylistsDataType> {}

export interface ErrorActionPayloadType extends PayloadAction<ErrorDataType> {}

// Response
export type PlaylistsDataResponseType = {
	data: Array<PlaylistType>
}
export type PlaylistDataResponseType = {
	data: PlaylistType
}
// Actions
export type PlaylistsActionType =
	| SetPlaylistStartActionPayloadType
	| GetPlaylistsSuccessActionPayloadType
	| ErrorActionPayloadType

// State
export interface PlaylistsStateType {
	data: Array<PlaylistType>
	fetchDataLoading: boolean
	fetchDataError: ErrorType | null
	addItemLoading: boolean
	addItemError: ErrorType | null
}
