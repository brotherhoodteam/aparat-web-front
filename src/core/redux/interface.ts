import { AppActionType } from '../../store/app/interface'
import { IntlActionType } from '../../store/intl/interface'
import { UserActionType } from '../../store/user/interface'
import appReducer from './reducer'

export type StateType = ReturnType<typeof appReducer>
export type ActionType = IntlActionType | UserActionType | AppActionType
