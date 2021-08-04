import { useSelector } from 'react-redux'
import {
	selectChannelCategoryList,
	selectDraftCategory,
	selectGeneralCategoryList
} from './selectors'

// HOOKS
export const useDraftCategory = () => {
	return useSelector(selectDraftCategory)
}

export const useCategories = () => {
	return useSelector(selectGeneralCategoryList)
}

export const useChannelCategories = () => {
	return useSelector(selectChannelCategoryList)
}
