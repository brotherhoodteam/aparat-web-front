import { createSlice } from '@reduxjs/toolkit'
import {
	CreatePlaylistRequest,
	FetchPlaylistListSuccess,
	ErrorAction,
	PlaylistsState,
	CreatePlaylistSuccess
} from './interface'

const initialState: PlaylistsState = {
	list: {
		data: [],
		loading: false,
		errors: null
	},
	create: {
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
			state.create.loading = true
			state.create.errors = null
		},
		createPlaylistSuccess: (state, action: CreatePlaylistSuccess) => {
			state.list.data.push(action.payload.playlist)
			state.create.loading = false
			state.create.errors = null
		},
		createPlaylistFailure: (state, action: ErrorAction) => {
			state.create.loading = false
			state.create.errors = action.payload.error
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
