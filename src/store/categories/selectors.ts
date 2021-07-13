import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'
import { CategoryNormalizedType, CategoryType } from './interface'

// State
export const selectCategories = (state: StateType) => state.categories

// Set Item
export const selectSetCategory = createSelector([selectCategories], state => state.set)

// lsit
export const selectCategoryList = createSelector(
	[selectCategories],
	categories => categories.list
)

export const selectNormalizedCategoryList = createSelector(
	[selectCategoryList],
	state => {
		return {
			data: state.data.map((item: CategoryType) => ({
				id: item.id,
				userId: item.user_id,
				label: item.title,
				value: item.slug,
				icon: item.icon,
				banner: item.banner,
				slug: item.slug
			})),
			loading: state.loading,
			errors: state.errors
		}
	}
)

export const selectGeneralCategoryList = createSelector(
	[selectNormalizedCategoryList],
	categories => {
		return {
			...categories,
			data: categories.data.filter((item: CategoryNormalizedType) => !item.userId)
		}
	}
)

export const selectChannelCategoryList = createSelector(
	[selectNormalizedCategoryList],
	categories => {
		return {
			...categories,
			data: categories.data.filter((item: CategoryNormalizedType) => item.userId)
		}
	}
)
