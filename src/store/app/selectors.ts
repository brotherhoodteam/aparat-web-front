import { createSelector } from 'reselect'
import { State } from 'core/redux/interface'

export const selectAppState = (state: State) => state.app
export const selectAppError = createSelector([selectAppState], app => app.error)
export const selectAppDrawer = createSelector([selectAppState], app => app.drawer)
export const selectAppModal = createSelector([selectAppState], app => app.modal)
export const selectAppOverlay = createSelector([selectAppState], app => app.overlay)
