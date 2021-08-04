import { createSelector } from 'reselect'
import { State } from 'core/redux/interface'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserListRequest } from './slice'
import { FetchUserListRequestPayload } from './types'

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
