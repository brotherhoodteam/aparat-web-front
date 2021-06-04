import { AppActionTypes } from '../../store/app/interface'
import { IntlActionTypes } from '../../store/intl/interface'
import { TagsActionType } from '../../store/tags/interface'
import { CategoriesActionType } from '../../store/categories/interface'
import { UserActionTypes } from '../../store/user/interface'
import { VideoActionTypes } from '../../store/video/interface'
import appReducer from './reducer'

export type StateType = ReturnType<typeof appReducer>
export type ActionType =
	| IntlActionTypes
	| UserActionTypes
	| AppActionTypes
	| VideoActionTypes
	| TagsActionType
	| CategoriesActionType
