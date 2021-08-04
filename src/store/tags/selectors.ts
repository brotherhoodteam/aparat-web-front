import { createSelector } from 'reselect'
import { State } from 'core/redux/interface'
import { Tag } from 'lib/types/tag'

// SELECTORS
export const selectTagsStore = (state: State) => state.tags
export const selectDraftTag = createSelector([selectTagsStore], tags => tags.draft)
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
