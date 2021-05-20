import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'

export const selectUser = (state: StateType) => state.user

export const selectUserAuth = createSelector([selectUser], userState => userState.auth)

export const selectUserSignInLoading = createSelector(
	[selectUser],
	userState => userState.loading
)

export const selectUserSignInError = createSelector(
	[selectUser],
	userState => userState.error
)
