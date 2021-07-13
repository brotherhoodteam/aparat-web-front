import { useSelector } from 'react-redux'
import { selectGeneralCategoryList } from '../store/categories/selectors'

export const useCategories = () => {
	return useSelector(selectGeneralCategoryList)
}
