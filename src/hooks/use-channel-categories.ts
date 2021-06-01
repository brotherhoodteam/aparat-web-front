import { useSelector } from 'react-redux'
import {
	selectCategoriesLoading,
	selectChannelCategoriesData
} from '../store/categories/selectors'

export const useChannelCategories = () => {
	const data = useSelector(selectChannelCategoriesData)
	const loading = useSelector(selectCategoriesLoading)
	return { data, loading }
}
