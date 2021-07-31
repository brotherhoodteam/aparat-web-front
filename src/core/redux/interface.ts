import { AppActions } from 'store/app/interface'
import { IntlActions } from 'store/intl/interface'
import { TagsActions } from 'store/tags/interface'
import { CategoriesActionType } from 'store/categories/interface'
import { AuthActions } from 'store/auth/interface'
import { UsersActions } from 'store/user/interface'
import { VideoActions } from 'store/video/interface'
import { PlaylistsActions } from 'store/playlists/interface'
import appReducer from './reducer'

export type State = ReturnType<typeof appReducer>
export type Actions =
	| IntlActions
	| AuthActions
	| AppActions
	| TagsActions
	| VideoActions
	| CategoriesActionType
	| PlaylistsActions
	| UsersActions
