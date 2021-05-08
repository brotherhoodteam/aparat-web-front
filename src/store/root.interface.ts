import { IntlActionType } from './intl/intl.interface'
import rootReducer from './root.reducer'

export type StateType = ReturnType<typeof rootReducer>
export type Action = IntlActionType
