import { AppActionTypes } from '../../store/app/interface'
import { IntlActionTypes } from '../../store/intl/interface'
import { TagsActionType } from '../../store/tags/interface'
import { CategoriesActionType } from '../../store/categories/interface'
import { UserActionTypes } from '../../store/auth/interface'
import { VideoActionTypes } from '../../store/video/interface'
import { PlaylistsActionType } from '../../store/playlists/interface'
import appReducer from './reducer'

export type StateType = ReturnType<typeof appReducer>
export type ActionType =
	| IntlActionTypes
	| UserActionTypes
	| AppActionTypes
	| TagsActionType
	| VideoActionTypes
	| CategoriesActionType
	| PlaylistsActionType
