import { AppActions } from 'store/app/interface'
import { IntlActions } from 'store/intl/interface'
import { TagsActions } from 'store/tags/interface'
import { CategoriesActionType } from 'store/categories/interface'
import { UserActions } from 'store/auth/interface'
import { VideoActionTypes } from 'store/video/interface'
import { PlaylistsActions } from 'store/playlists/interface'
import appReducer from './reducer'

export type State = ReturnType<typeof appReducer>
export type Actions =
	| IntlActions
	| UserActions
	| AppActions
	| TagsActions
	| VideoActionTypes
	| CategoriesActionType
	| PlaylistsActions
