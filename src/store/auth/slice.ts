import { createSlice } from '@reduxjs/toolkit'
import {
	SignInPayloadType,
	SignInFailedPayloadType,
	SignInSuccessPayloadType,
	AuthStateType
} from './interface'

const initialState: AuthStateType = {
	auth: {
		credentials: null
	},
	signIn: {
		passport: null,
		error: null,
		loading: false
	},
	logout: {
		loading: false
	}
}

const authSlice = createSlice({
	name: 'passport',
	initialState,
	reducers: {
		signInAction: (state, action: SignInPayloadType) => {
			state.auth.credentials = null
			state.signIn.passport = action.payload.passport
			state.signIn.loading = true
			state.signIn.error = null
		},
		signInFromLocalStorageAction: (state, action: any) => {
			state.auth.credentials = action.payload.credentials
		},
		signInSuccessAction: (state, action: SignInSuccessPayloadType) => {
			state.auth.credentials = action.payload.credentials
			state.signIn.passport = null
			state.signIn.loading = false
			state.signIn.error = null
		},
		signInFailedAction: (state, action: SignInFailedPayloadType) => {
			state.auth.credentials = null
			state.signIn.passport = null
			state.signIn.loading = false
			state.signIn.error = action.payload.error
		},
		signInResetAction: state => {
			state.signIn.passport = null
			state.auth.credentials = null
			state.signIn.loading = false
			state.signIn.error = null
		},
		logoutStartAction: state => {
			state.logout.loading = true
		},
		logoutSuccessAction: state => {
			state.logout.loading = false
		}
	}
})

export const {
	signInResetAction,
	signInAction,
	signInSuccessAction,
	signInFailedAction,
	signInFromLocalStorageAction,
	logoutStartAction,
	logoutSuccessAction
} = authSlice.actions
export default authSlice.reducer
