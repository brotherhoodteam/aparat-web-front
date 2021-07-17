import { PayloadAction } from '@reduxjs/toolkit'
import { BaseEntity } from 'core/interface/base'
import { Error } from 'core/interface/exception'

// TYPIES
export interface Playlist extends BaseEntity {
	title: string
	size: number
}
export interface CreatePlaylist {
	title: string
}
export interface PlaylistNormalized {
	id: number
	userId?: string
	label: string
	value: number
}

// PAYLOAD
export interface CreatePlaylistRequestPayload {
	playlist: CreatePlaylist
}
export interface CreatePlaylistSuccessPayload {
	playlist: Playlist
}
export interface CreatePlaylistResponsePayload {
	data: Playlist
}

export interface FetchPlaylistListSuccessPayload {
	playlistList: Array<Playlist>
}
export interface FetchPlaylistListResponsePayload {
	data: Array<Playlist>
}

export interface ErrorPayload {
	error: Error
}

// CREATOR ACTION
export interface CreatePlaylistRequest
	extends PayloadAction<CreatePlaylistRequestPayload> {}
export interface CreatePlaylistSuccess
	extends PayloadAction<CreatePlaylistSuccessPayload> {}

export interface FetchPlaylistListSuccess
	extends PayloadAction<FetchPlaylistListSuccessPayload> {}

export interface ErrorAction extends PayloadAction<ErrorPayload> {}

// Actions
export type PlaylistsActions =
	| CreatePlaylistRequest
	| FetchPlaylistListSuccessPayload
	| ErrorPayload

// State
export interface PlaylistsState {
	list: {
		data: Array<Playlist>
		loading: boolean
		errors: Error | null
	}
	create: {
		loading: boolean
		errors: Error | null
	}
}
