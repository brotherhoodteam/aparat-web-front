import { createSelector } from 'reselect'
import { State } from 'core/redux/interface'

// SELECTORS
export const selectUsersStore = (state: State) => state.users

export const selectUserProfile = createSelector(
	[selectUsersStore],

	state => state.profile
)
export const selectUserList = createSelector(
	[selectUsersStore],

	state => state.list
)
