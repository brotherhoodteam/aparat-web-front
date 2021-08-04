import { createSelector } from 'reselect'
import { State } from 'core/redux/interface'
import { useSelector } from 'react-redux'

// SELECTORS
export const selectPostStore = (state: State) => state.post
export const selectDraftPost = createSelector([selectPostStore], post => post.draftPost)
export const selectSinglePost = createSelector([selectPostStore], post => post.single)
export const selectDeletedPost = createSelector(
	[selectPostStore],
	post => post.deletePost
)
export const selectPostStatistics = createSelector(
	[selectPostStore],
	post => post.statistics
)
export const selectPostList = createSelector([selectPostStore], post => post.list)
export const selectUploadedVideo = createSelector(
	[selectPostStore],
	post => post.uploadVideo
)
export const selectUploadBanner = createSelector(
	[selectPostStore],
	post => post.uploadBanner
)
