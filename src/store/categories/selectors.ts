import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'
import { CategoryType } from './interface'

// State
export const selectCategoriesState = (state: StateType) => state.categories

// Tags
export const selectCategoriesData = createSelector([selectCategoriesState], state => {
	return state.data.map((item: CategoryType) => ({
		id: item.id,
		userId: item.user_id,
		label: item.title,
		value: item.id,
		icon: item.icon,
		banner: item.banner,
		slug: item.title
	}))
})

export const selectChannelCategoriesData = createSelector(
	[selectCategoriesData],
	categories => {
		return categories.filter(item => item.userId)
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
