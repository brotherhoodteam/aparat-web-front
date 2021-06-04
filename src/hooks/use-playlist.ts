import { useSelector } from 'react-redux'
import {
	selectPlaylistsData,
	selectPlaylistsFetchDataLoading
} from '../store/playlists/selectors'

export const usePlaylists = () => {
	const data = useSelector(selectPlaylistsData)
	const loading = useSelector(selectPlaylistsFetchDataLoading)
	return { data, loading }
}
