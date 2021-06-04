import { createSlice } from '@reduxjs/toolkit'
import {
	SetPlaylistStartActionPayloadType,
	GetPlaylistsSuccessActionPayloadType,
	ErrorActionPayloadType,
	PlaylistsStateType,
	SetPlaylistSuccessActionPayloadType
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
		getPlaylistsSuccessAction: (state, action: GetPlaylistsSuccessActionPayloadType) => {
			state.data = action.payload.data
			state.fetchDataLoading = false
			state.fetchDataError = null
		},
		getPlaylistsFailedAction: (state, action: ErrorActionPayloadType) => {
			state.data = []
			state.fetchDataLoading = false
			state.fetchDataError = action.payload.error
		},
		setPlaylistStartAction: (state, action: SetPlaylistStartActionPayloadType) => {
			state.addItemLoading = true
			state.addItemError = null
		},
		setPlaylistSuccessAction: (state, action: SetPlaylistSuccessActionPayloadType) => {
			state.data.push(action.payload.data)
			state.addItemLoading = false
			state.addItemError = null
		},
		setPlaylistFailedAction: (state, action: ErrorActionPayloadType) => {
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
