import { createSlice } from '@reduxjs/toolkit'
import {
	CreatePlaylistRequest,
	FetchPlaylistListSuccess,
	ErrorAction,
	PlaylistsState,
	CreatePlaylistSuccess
} from './types'

const initialState: PlaylistsState = {
	list: {
		data: [],
		loading: false,
		errors: null
	},
	draft: {
		loading: false,
		errors: null
	}
}

const playlistSlice = createSlice({
	name: 'playlists',
	initialState,
	reducers: {
		fetchPlaylistListRequest: state => {
			state.list.data = []
			state.list.loading = true
			state.list.errors = null
		},
		fetchPlaylistListSuccess: (state, action: FetchPlaylistListSuccess) => {
			state.list.data = action.payload.playlistList
			state.list.loading = false
			state.list.errors = null
		},
		fetchPlaylistListFailure: (state, action: ErrorAction) => {
			state.list.data = []
			state.list.loading = false
			state.list.errors = action.payload.error
		},
		createPlaylistRequest: (state, action: CreatePlaylistRequest) => {
			state.draft.loading = true
			state.draft.errors = null
		},
		createPlaylistSuccess: (state, action: CreatePlaylistSuccess) => {
			state.list.data.push(action.payload.playlist)
			state.draft.loading = false
			state.draft.errors = null
		},
		createPlaylistFailure: (state, action: ErrorAction) => {
			state.draft.loading = false
			state.draft.errors = action.payload.error
		}
	}
})

export const {
	fetchPlaylistListRequest,
	fetchPlaylistListSuccess,
	fetchPlaylistListFailure,
	createPlaylistRequest,
	createPlaylistSuccess,
	createPlaylistFailure
} = playlistSlice.actions
export default playlistSlice.reducer
