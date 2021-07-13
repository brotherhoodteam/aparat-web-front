import { useSelector } from 'react-redux'
import { selectNormalizedPlaylistList } from '../store/playlists/selectors'

export const usePlaylists = () => {
	return useSelector(selectNormalizedPlaylistList)
}
