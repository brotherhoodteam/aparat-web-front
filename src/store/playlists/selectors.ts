import { createSelector } from 'reselect'
import { StateType } from 'core/redux/interface'
import { PlaylistType } from './interface'

// State
export const selectPlaylists = (state: StateType) => state.playlists

// set
export const selectSetPlaylist = createSelector([selectPlaylists], state => state.set)

// list
export const selectPlaylistList = createSelector([selectPlaylists], state => state.list)

export const selectNormalizedPlaylistList = createSelector([selectPlaylistList], list => {
	return {
		data: list.data.map((item: PlaylistType) => ({
			id: item.id,
			userId: item.user_id,
			label: item.title,
			value: item.id
		})),
		loading: list.loading,
		errors: list.errors
	}
})
