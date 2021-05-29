import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'

export const selectAppState = (state: StateType) => state.app
export const selectAppError = createSelector([selectAppState], app => app.error)
export const selectAppDrawer = createSelector([selectAppState], app => app.drawer)
export const selectAppOverlay = createSelector([selectAppState], app => app.overlay)
