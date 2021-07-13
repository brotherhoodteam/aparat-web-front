import { useSelector } from 'react-redux'
import { selectNormalizedTagList } from 'store/tags/selectors'

export const useTags = () => {
	return useSelector(selectNormalizedTagList)
}
