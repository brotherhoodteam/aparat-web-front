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
	credentials: null,
	error: null,
	loading: false
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signInReinitAction: state => {
			state.username = null
			state.password = null
			state.credentials = null
			state.loading = false
			state.error = null
		},
		signInAction: (state, action: SignInActionPayloadType) => {
			state.username = action.payload.username
			state.password = action.payload.password
			state.credentials = null
			state.loading = true
			state.error = null
		},
		signInSuccessAction: (state, action: SignInSuccessActionPayloadType) => {
			state.username = null
			state.password = null
			state.credentials = action.payload.user
			state.loading = false
			state.error = null
		},
		signInFailedAction: (state, action: SignInFailedActionPayloadType) => {
			state.username = null
			state.password = null
			state.credentials = null
			state.loading = false
			state.error = action.payload.error
		}
	}
})

export const {
	signInReinitAction,
	signInAction,
	signInSuccessAction,
	signInFailedAction
} = userSlice.actions
export default userSlice.reducer
