import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'
import { PlaylistNormalizedType, PlaylistType } from './interface'

// State
export const selectPlaylistsState = (state: StateType) => state.playlists

// Tags
export const selectPlaylistsData = createSelector([selectPlaylistsState], state => {
	return state.data.map((item: PlaylistType) => ({
		id: item.id,
		userId: item.user_id,
		label: item.title,
		value: item.id
	}))
})

export const selectPlaylistsFetchDataLoading = createSelector(
	[selectPlaylistsState],
	state => state.fetchDataLoading
)
export const selectPlaylistsFetchDataError = createSelector(
	[selectPlaylistsState],
	state => state.fetchDataError
)

// Set
export const selectPlaylistAddItemLoading = createSelector(
	[selectPlaylistsState],
	state => state.addItemLoading
)
export const selectPlaylistAddItemError = createSelector(
	[selectPlaylistsState],
	state => state.addItemError
)
