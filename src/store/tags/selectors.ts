import { createSelector } from 'reselect'
import { State } from 'config/redux/interface'
import { Tag } from './interface'

// State
export const selectTagsStore = (state: State) => state.tags
export const selectCreatedTag = createSelector([selectTagsStore], tags => tags.create)
export const selectTagList = createSelector([selectTagsStore], tags => tags.list)
export const selectNormalizedTagList = createSelector([selectTagList], list => ({
	data: list.data.map((item: Tag) => ({
		id: item.id,
		label: item.title,
		value: item.id
	})),
	loading: list.loading,
	errors: list.errors
}))
