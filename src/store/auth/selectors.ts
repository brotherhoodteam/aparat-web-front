import { createSelector } from 'reselect'
import { State } from 'core/redux/interface'

export const selectUserState = (state: State) => state.auth
export const selectSignIn = createSelector(
	[selectUserState],
	userState => userState.signIn
)
export const selectAuth = createSelector([selectUserState], userState => userState.auth)
export const selectLogout = createSelector(
	[selectUserState],
	userState => userState.logout
)
