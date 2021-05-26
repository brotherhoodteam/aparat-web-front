import { AppActionTypes } from '../../store/app/interface'
import { IntlActionTypes } from '../../store/intl/interface'
import { UserActionTypes } from '../../store/user/interface'
import { VideoActionTypes } from '../../store/video/interface'
import appReducer from './reducer'

export type StateType = ReturnType<typeof appReducer>
export type ActionType =
	| IntlActionTypes
	| UserActionTypes
	| AppActionTypes
	| VideoActionTypes
