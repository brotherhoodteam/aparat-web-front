import { createSlice } from '@reduxjs/toolkit'
import {
	FetchUserProfileRequest,
	FetchUserProfileSuccess,
	UserState,
	ErrorAction,
	FetchUserListRequest,
	FetchUserListSuccess
} from './types'

const initialState: UserState = {
	profile: { data: null, loading: false, errors: null },
	list: {
		data: null,
		loading: false,
		errors: null
	}
}

const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		fetchUserProfileRequest: (state, action: FetchUserProfileRequest) => {
			state.profile.data = null
			state.profile.loading = true
			state.profile.errors = null
		},

		fetchUserProfileSuccess: (state, action: FetchUserProfileSuccess) => {
			state.profile.data = action.payload.data
			state.profile.loading = false
			state.profile.errors = null
		},
		fetchUserProfileFailur: (state, action: ErrorAction) => {
			state.profile.data = null
			state.profile.loading = false
			state.profile.errors = action.payload.error
		},
		fetchUserListRequest: (state, action: FetchUserListRequest) => {
			state.list.data = null
			state.list.loading = true
			state.list.errors = null
		},

		fetchUserListSuccess: (state, action: FetchUserListSuccess) => {
			state.list.data = action.payload.data
			state.list.loading = false
			state.list.errors = null
		},
		fetchUserListFailur: (state, action: ErrorAction) => {
			state.list.data = null
			state.list.loading = false
			state.list.errors = action.payload.error
		}
	}
})

export const {
	fetchUserProfileRequest,
	fetchUserProfileSuccess,
	fetchUserProfileFailur,
	fetchUserListRequest,
	fetchUserListSuccess,
	fetchUserListFailur
} = userSlice.actions
export default userSlice.reducer
