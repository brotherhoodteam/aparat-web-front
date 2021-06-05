import { createSlice } from '@reduxjs/toolkit'
import {
	SetPlaylistStartPayloadType,
	GetPlaylistsSuccessPayloadType,
	ErrorPayloadType,
	PlaylistsStateType,
	SetPlaylistSuccessPayloadType
} from './interface'

const initialState: PlaylistsStateType = {
	data: [],
	fetchDataLoading: false,
	fetchDataError: null,
	addItemLoading: false,
	addItemError: null
}

const tagsSlice = createSlice({
	name: 'Playlists',
	initialState,
	reducers: {
		getPlaylistsStartAction: (state, action) => {
			state.data = []
			state.fetchDataLoading = true
			state.fetchDataError = null
		},
		getPlaylistsSuccessAction: (state, action: GetPlaylistsSuccessPayloadType) => {
			state.data = action.payload.playlists
			state.fetchDataLoading = false
			state.fetchDataError = null
		},
		getPlaylistsFailedAction: (state, action: ErrorPayloadType) => {
			state.data = []
			state.fetchDataLoading = false
			state.fetchDataError = action.payload.error
		},
		setPlaylistStartAction: (state, action: SetPlaylistStartPayloadType) => {
			state.addItemLoading = true
			state.addItemError = null
		},
		setPlaylistSuccessAction: (state, action: SetPlaylistSuccessPayloadType) => {
			state.data.push(action.payload.playlist)
			state.addItemLoading = false
			state.addItemError = null
		},
		setPlaylistFailedAction: (state, action: ErrorPayloadType) => {
			state.addItemLoading = false
			state.addItemError = action.payload.error
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
} = tagsSlice.actions
export default tagsSlice.reducer
