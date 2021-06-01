import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'
import { TagType } from './interface'

// State
export const selectTagsState = (state: StateType) => state.tags

// Tags
export const selectTagsData = createSelector([selectTagsState], state =>
	state.tagsData.map((item: TagType) => ({
		id: item.id,
		label: item.title,
		value: item.id
	}))
)
export const selectTagsLoading = createSelector(
	[selectTagsState],
	state => state.tagsLoading
)
export const selectTagsStateError = createSelector(
	[selectTagsState],
	state => state.tagsError
)

// Tag
export const selectTagData = createSelector([selectTagsState], state => state.tagData)
export const selectTagLoading = createSelector(
	[selectTagsState],
	state => state.tagLoading
)
export const selectTagError = createSelector([selectTagsState], state => state.tagError)
