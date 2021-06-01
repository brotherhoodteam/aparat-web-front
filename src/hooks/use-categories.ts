import { useSelector } from 'react-redux'
import {
	selectCategoriesData,
	selectCategoriesFetchDataLoading
} from '../store/categories/selectors'

export const useCategories = () => {
	const data = useSelector(selectCategoriesData)
	const loading = useSelector(selectCategoriesFetchDataLoading)
	return { data, loading }
}
