import { useSelector } from 'react-redux'
import {
	selectCategoriesFetchDataLoading,
	selectChannelCategoriesData
} from '../store/categories/selectors'

export const useChannelCategories = () => {
	const data = useSelector(selectChannelCategoriesData)
	const loading = useSelector(selectCategoriesFetchDataLoading)
	return { data, loading }
}
