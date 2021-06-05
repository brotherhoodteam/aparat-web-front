import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'

export const selectUserState = (state: StateType) => state.user

export const selectUser = createSelector(
	[selectUserState],
	userState => userState.credentials
)

export const selectUserSignInLoading = createSelector(
	[selectUserState],
	userState => userState.loading
)

export const selectUserSignInError = createSelector(
	[selectUserState],
	userState => userState.error
)
