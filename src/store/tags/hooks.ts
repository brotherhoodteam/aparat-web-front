import { useSelector } from 'react-redux'
import { selectDraftTag, selectNormalizedTagList } from './selectors'

// HOOKS
export const useDraftTag = () => {
	return useSelector(selectDraftTag)
}
export const useTagList = () => {
	return useSelector(selectNormalizedTagList)
}
