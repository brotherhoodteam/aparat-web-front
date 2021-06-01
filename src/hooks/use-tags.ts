import { useSelector } from 'react-redux'
import { selectTagsData, selectTagsFetchDataLoading } from '../store/tags/selectors'

export const useTags = () => {
	const data = useSelector(selectTagsData)
	const loading = useSelector(selectTagsFetchDataLoading)
	return { data, loading }
}
