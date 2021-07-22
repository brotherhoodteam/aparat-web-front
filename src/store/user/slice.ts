import { createSlice } from '@reduxjs/toolkit'
import {
	FetchUserProfileRequest,
	FetchUserProfileSuccess,
	UserState,
	ErrorAction
} from './interface'

const initialState: UserState = {
	profile: { data: null, loading: false, errors: null }
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
			state.profile.data = action.payload.user
			state.profile.loading = false
			state.profile.errors = null
		},
		fetchUserProfileFailur: (state, action: ErrorAction) => {
			state.profile.data = null
			state.profile.loading = false
			state.profile.errors = action.payload.error
		}
	}
})

export const {
	fetchUserProfileRequest,
	fetchUserProfileSuccess,
	fetchUserProfileFailur
} = userSlice.actions
export default userSlice.reducer
