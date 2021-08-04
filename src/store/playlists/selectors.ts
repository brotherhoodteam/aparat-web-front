import { createSelector } from 'reselect'
import { State } from 'core/redux/interface'
import { useSelector } from 'react-redux'
import { Playlist } from 'lib/types/playlist'

// SELECTORS
export const selectPlaylistsStore = (state: State) => state.playlists
export const selectCreatePlaylist = createSelector(
	[selectPlaylistsStore],
	state => state.draft
)
export const selectPlaylistList = createSelector(
	[selectPlaylistsStore],
	state => state.list
)
export const selectNormalizedPlaylistList = createSelector([selectPlaylistList], list => {
	return {
		data: list.data.map((item: Playlist) => ({
			id: item.id,
			userId: item.user_id,
			label: item.title,
			value: item.id
		})),
		loading: list.loading,
		errors: list.errors
	}
})
