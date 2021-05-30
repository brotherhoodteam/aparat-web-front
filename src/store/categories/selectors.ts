import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'

// State
export const selectCategoriesState = (state: StateType) => state.categories

// Tags
export const selectCategoriesData = createSelector(
	[selectCategoriesState],
	state => state.categoriesData
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
