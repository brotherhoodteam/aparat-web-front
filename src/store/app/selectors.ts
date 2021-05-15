import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'

export const selectApp = (state: StateType) => state.app
export const selectAppError = createSelector([selectApp], app => app.error)
