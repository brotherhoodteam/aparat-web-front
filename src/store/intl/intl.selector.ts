import { createSelector } from 'reselect'
import { StateType } from '../root.interface'
import { IntlState } from './intl.interface'

export const selectIntl = (state: StateType): IntlState => state.intl
export const selectIntlLocale = createSelector([selectIntl], intl => intl.locale)
