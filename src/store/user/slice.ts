import { createSlice } from '@reduxjs/toolkit'
import {
	SignInPayloadType,
	SignInFailedPayloadType,
	SignInSuccessPayloadType,
	UserStateType
} from './interface'

const initialState: UserStateType = {
	user: null,
	credentials: null,
	error: null,
	loading: false
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signInReinitAction: state => {
			state.user = null
			state.credentials = null
			state.loading = false
			state.error = null
		},
		signInAction: (state, action: SignInPayloadType) => {
			state.user = action.payload.user
			state.credentials = null
			state.loading = true
			state.error = null
		},
		signInSuccessAction: (state, action: SignInSuccessPayloadType) => {
			state.user = null
			state.credentials = action.payload.credentials
			state.loading = false
			state.error = null
		},
		signInFailedAction: (state, action: SignInFailedPayloadType) => {
			state.user = null
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
