import { createSelector } from 'reselect'
import { StateType } from 'config/redux/interface'
import { TagType } from './interface'

// State
export const selectTagsState = (state: StateType) => state.tags

// set
export const selectSetTag = createSelector([selectTagsState], tags => tags.set)

// list
export const selectTagList = createSelector([selectTagsState], tags => tags.list)
export const selectNormalizedTagList = createSelector([selectTagList], list => ({
	data: list.data.map((item: TagType) => ({
		id: item.id,
		label: item.title,
		value: item.id
	})),
	loading: list.loading,
	errors: list.errors
}))
