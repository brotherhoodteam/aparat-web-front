import { useSelector } from 'react-redux'
import { selectTagsData, selectTagsLoading } from '../store/tags/selectors'

export const useTags = () => {
	const data = useSelector(selectTagsData)
	const loading = useSelector(selectTagsLoading)
	return { data, loading }
}
