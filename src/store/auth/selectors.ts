import { createSelector } from 'reselect'
import { StateType } from 'config/redux/interface'

export const selectUserState = (state: StateType) => state.user
export const selectSignIn = createSelector(
	[selectUserState],
	userState => userState.signIn
)
export const selectAuth = createSelector([selectUserState], userState => userState.auth)
export const selectLogout = createSelector(
	[selectUserState],
	userState => userState.logout
)
