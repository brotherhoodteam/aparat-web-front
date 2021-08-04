import { AppActions } from 'store/app/interface'
import { IntlActions } from 'store/intl/types'
import { TagsActions } from 'store/tags/types'
import { CategoriesActionType } from 'store/categories/types'
import { AuthActions } from 'store/auth/interface'
import { UsersActions } from 'store/user/types'
import { VideoActions } from 'store/post/types'
import { PlaylistsActions } from 'store/playlists/types'
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
