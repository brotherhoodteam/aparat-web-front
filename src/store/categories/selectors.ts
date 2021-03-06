import { createSelector } from 'reselect'
import { State } from 'core/redux/interface'
import { Category, CategoryNormalized } from 'lib/types/category'

// SELECTORS
export const selectCategories = (state: State) => state.categories
export const selectDraftCategory = createSelector(
	[selectCategories],
	state => state.draft
)
export const selectCategoryList = createSelector(
	[selectCategories],
	categories => categories.list
)
export const selectNormalizedCategoryList = createSelector(
	[selectCategoryList],
	state => {
		return {
			data: state.data.map((item: Category) => ({
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
			data: categories.data.filter((item: CategoryNormalized) => !item.userId)
		}
	}
)
export const selectChannelCategoryList = createSelector(
	[selectNormalizedCategoryList],
	categories => {
		return {
			...categories,
			data: categories.data.filter((item: CategoryNormalized) => item.userId)
		}
	}
)
