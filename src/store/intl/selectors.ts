import { createSelector } from 'reselect'
import { StateType } from 'config/redux/interface'
import { IntlState } from './interface'

export const selectIntl = (state: StateType): IntlState => state.intl
export const selectIntlLocale = createSelector([selectIntl], intl => intl.locale)
