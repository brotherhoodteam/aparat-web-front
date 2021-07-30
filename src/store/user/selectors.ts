import { createSelector } from 'reselect'
import { State } from 'config/redux/interface'

// STATE
export const selectUsersStore = (state: State) => state.users

export const selectUserProfile = createSelector(
	[selectUsersStore],

	state => state.profile
)
export const selectUserList = createSelector(
	[selectUsersStore],

	state => state.list
)
