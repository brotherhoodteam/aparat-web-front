import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'
import { CategoryNormalizedType, CategoryType } from './interface'

// State
export const selectCategoriesState = (state: StateType) => state.categories

// Tags
export const selectNormalizedCategoriesData = createSelector(
	[selectCategoriesState],
	state => {
		return state.data.map((item: CategoryType) => ({
			id: item.id,
			userId: item.user_id,
			label: item.title,
			value: item.slug,
			icon: item.icon,
			banner: item.banner,
			slug: item.slug
		}))
	}
)

export const selectCategoriesData = createSelector(
	[selectNormalizedCategoriesData],
	categories => {
		return categories.filter((item: CategoryNormalizedType) => !item.userId)
	}
)

export const selectChannelCategoriesData = createSelector(
	[selectNormalizedCategoriesData],
	categories => {
		return categories.filter((item: CategoryNormalizedType) => item.userId)
	}
)

export const selectCategoriesFetchDataLoading = createSelector(
	[selectCategoriesState],
	state => state.fetchDataLoading
)
export const selectCategoriesFetchDataError = createSelector(
	[selectCategoriesState],
	state => state.fetchDataError
)

// Set
export const selectCategoryAddItemLoading = createSelector(
	[selectCategoriesState],
	state => state.addItemLoading
)
export const selectCategoryAddItemError = createSelector(
	[selectCategoriesState],
	state => state.addItemError
)
