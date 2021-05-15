import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
	error: null
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		signInAction: (state, action: PayloadAction<SignInActionPayloadType>) => {
			state.username = action.payload.username
			state.password = action.payload.password
			state.user = null
			state.error = null
		},
		signInSuccessAction: (
			state,
			action: PayloadAction<SignInSuccessActionPayloadType>
		) => {
			state.username = null
			state.password = null
			state.user = action.payload.user
			state.error = null
		},
		signInFailedAction: (state, action: PayloadAction<SignInFailedActionPayloadType>) => {
			state.username = null
			state.password = null
			state.user = null
			state.error = action.payload.error
		}
	}
})

export const { signInAction, signInSuccessAction, signInFailedAction } = userSlice.actions
export default userSlice.reducer
