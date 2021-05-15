import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'

export const selectUser = (state: StateType) => state.user
export const selectUserSignInError = createSelector(
	[selectUser],
	userState => userState.error
)
