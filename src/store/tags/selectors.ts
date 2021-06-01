import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'
import { TagType } from './interface'

// State
export const selectTagsState = (state: StateType) => state.tags

// Tags
export const selectTagsData = createSelector([selectTagsState], state =>
	state.data.map((item: TagType) => ({
		id: item.id,
		label: item.title,
		value: item.id
	}))
)
export const selectTagsFetchDataLoading = createSelector(
	[selectTagsState],
	state => state.fetchDataLoading
)
export const selectTagsFetchDataError = createSelector(
	[selectTagsState],
	state => state.fetchDataError
)

// Tag
export const selectTagsAddItemLoading = createSelector(
	[selectTagsState],
	state => state.addItemLoading
)
export const selectTagsAddItemError = createSelector(
	[selectTagsState],
	state => state.addItemError
)
