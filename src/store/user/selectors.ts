import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'

export const selectUser = (state: StateType) => state.user

export const selectUserSignInLoading = createSelector(
	[selectUser],
	userState => userState.loading
)

export const selectUserSignInUser = createSelector(
	[selectUser],
	userState => userState.user
)

export const selectUserSignInError = createSelector(
	[selectUser],
	userState => userState.error
)
