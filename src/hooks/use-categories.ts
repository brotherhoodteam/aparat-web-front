import { useSelector } from 'react-redux'
import {
	selectCategoriesData,
	selectCategoriesLoading
} from '../store/categories/selectors'

export const useCategories = () => {
	const data = useSelector(selectCategoriesData)
	const loading = useSelector(selectCategoriesLoading)
	return { data, loading }
}
