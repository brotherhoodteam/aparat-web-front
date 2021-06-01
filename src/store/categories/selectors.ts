import { createSelector } from 'reselect'
import { idText } from 'typescript'
import { StateType } from '../../core/redux/interface'
import { CategoryType } from './interface'

// State
export const selectCategoriesState = (state: StateType) => state.categories

// Tags
export const selectCategoriesData = createSelector([selectCategoriesState], state => {
	return state.categoriesData.map((item: CategoryType) => ({
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

export const selectCategoriesLoading = createSelector(
	[selectCategoriesState],
	state => state.categoriesLoading
)
export const selectCategoriesError = createSelector(
	[selectCategoriesState],
	state => state.categoriesError
)

// Tag
export const selectCategoryData = createSelector(
	[selectCategoriesState],
	state => state.categoryData
)
export const selectCategoryLoading = createSelector(
	[selectCategoriesState],
	state => state.categoryLoading
)
export const selectCategoryError = createSelector(
	[selectCategoriesState],
	state => state.categoryError
)
