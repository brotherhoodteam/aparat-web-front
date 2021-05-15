import { createSlice } from '@reduxjs/toolkit'
import {
	SignInActionPayloadType,
	SignInFailedActionPayloadType,
	SignInSuccessActionPayloadType,
	UserStateType
} from './interface'

const initialState: UserStateType = {
	username: null,
	password: null,
	user: null,
	error: null,
	loading: false
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signInAction: (state, action: SignInActionPayloadType) => {
			state.username = action.payload.username
			state.password = action.payload.password
			state.user = null
			state.error = null
			state.loading = true
		},
		signInSuccessAction: (state, action: SignInSuccessActionPayloadType) => {
			state.username = null
			state.password = null
			state.user = action.payload.user
			state.error = null

			state.loading = false
		},
		signInFailedAction: (state, action: SignInFailedActionPayloadType) => {
			state.username = null
			state.password = null
			state.user = null
			state.error = action.payload.error
			state.loading = false
		}
	}
})

export const { signInAction, signInSuccessAction, signInFailedAction } = userSlice.actions
export default userSlice.reducer
