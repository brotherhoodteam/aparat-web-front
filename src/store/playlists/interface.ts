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
	playlist: PlaylistType
}
export interface PlaylistsDataType {
	playlists: Array<PlaylistType>
}
export interface CreatePlaylistDataType {
	playlist: CreatePlaylistType
}
export interface ErrorDataType {
	error: ErrorType
}

// Payloads
// set
export interface SetPlaylistStartPayloadType
	extends PayloadAction<CreatePlaylistDataType> {}
export interface SetPlaylistSuccessPayloadType extends PayloadAction<PlaylistDataType> {}
// get
export interface GetPlaylistsSuccessPayloadType
	extends PayloadAction<PlaylistsDataType> {}
// error
export interface ErrorPayloadType extends PayloadAction<ErrorDataType> {}

// Response
export type PlaylistsDataResponseType = {
	data: Array<PlaylistType>
}
export type PlaylistDataResponseType = {
	data: PlaylistType
}
// Actions
export type PlaylistsActionType =
	| SetPlaylistStartPayloadType
	| GetPlaylistsSuccessPayloadType
	| ErrorPayloadType

// State
export interface PlaylistsStateType {
	data: Array<PlaylistType>
	fetchDataLoading: boolean
	fetchDataError: ErrorType | null
	addItemLoading: boolean
	addItemError: ErrorType | null
}