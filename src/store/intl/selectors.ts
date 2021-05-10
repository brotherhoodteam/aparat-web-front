import { createSelector } from 'reselect'
import { StateType } from '../../core/redux/interface'
import { IntlState } from './types'

export const selectIntl = (state: StateType): IntlState => state.intl
export const selectIntlLocale = createSelector([selectIntl], intl => intl.locale)
