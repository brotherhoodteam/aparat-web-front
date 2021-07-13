import { useSelector } from 'react-redux'
import {
	selectGeneralCategoryList,
	selectChannelCategoryList
} from 'store/categories/selectors'

export const useCategories = () => {
	return useSelector(selectGeneralCategoryList)
}

export const useChannelCategories = () => {
	return useSelector(selectChannelCategoryList)
}
