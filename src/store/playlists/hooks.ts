import { useSelector } from 'react-redux'
import { selectCreatePlaylist, selectNormalizedPlaylistList } from './selectors'

// HOOKS
export const usePlaylists = () => {
	return useSelector(selectNormalizedPlaylistList)
}
export const useDraftPlaylist = () => {
	return useSelector(selectCreatePlaylist)
}
