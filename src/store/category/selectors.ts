import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'

export const selectCategory = (state: StateType) => state.category
export const selectCategoryList = createSelector(
	[selectCategory],
	category => category.list
)
