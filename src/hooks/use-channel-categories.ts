import { useSelector } from 'react-redux'
import { selectChannelCategoryList } from '../store/categories/selectors'

export const useChannelCategories = () => {
	return useSelector(selectChannelCategoryList)
}
