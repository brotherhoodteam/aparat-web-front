import { createSlice } from '@reduxjs/toolkit'
import {
	SetPlaylistStartPayloadType,
	GetPlaylistsSuccessPayloadType,
	ErrorPayloadType,
	PlaylistsStateType,
	SetPlaylistSuccessPayloadType
} from './interface'

const initialState: PlaylistsStateType = {
	list: {
		data: [],
		loading: false,
		errors: null
	},
	set: {
		loading: false,
		errors: null
	}
}

const playlistSlice = createSlice({
	name: 'playlists',
	initialState,
	reducers: {
		getPlaylistsStartAction: state => {
			state.list.data = []
			state.list.loading = true
			state.list.errors = null
		},
		getPlaylistsSuccessAction: (state, action: GetPlaylistsSuccessPayloadType) => {
			state.list.data = action.payload.playlists
			state.list.loading = false
			state.list.errors = null
		},
		getPlaylistsFailedAction: (state, action: ErrorPayloadType) => {
			state.list.data = []
			state.list.loading = false
			state.list.errors = action.payload.error
		},
		setPlaylistStartAction: (state, action: SetPlaylistStartPayloadType) => {
			state.set.loading = true
			state.set.errors = null
		},
		setPlaylistSuccessAction: (state, action: SetPlaylistSuccessPayloadType) => {
			state.list.data.push(action.payload.playlist)
			state.set.loading = false
			state.set.errors = null
		},
		setPlaylistFailedAction: (state, action: ErrorPayloadType) => {
			state.set.loading = false
			state.set.errors = action.payload.error
		}
	}
})

export const {
	getPlaylistsStartAction,
	getPlaylistsSuccessAction,
	getPlaylistsFailedAction,
	setPlaylistStartAction,
	setPlaylistSuccessAction,
	setPlaylistFailedAction
} = playlistSlice.actions
export default playlistSlice.reducer
