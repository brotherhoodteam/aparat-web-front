import { IntlActionType } from '../../store/intl/interface'
import appReducer from './reducer'

export type StateType = ReturnType<typeof appReducer>
export type ActionType = IntlActionType
