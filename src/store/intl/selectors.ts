import { createSelector } from 'reselect'
import { State } from 'core/redux/interface'
import { IntlState } from './interface'

export const selectIntl = (state: State): IntlState => state.intl
export const selectIntlLocale = createSelector([selectIntl], intl => intl.locale)
