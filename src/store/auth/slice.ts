import { createSlice } from '@reduxjs/toolkit'

import { SignInRequest, ErrorAction, SignInSuccess, AuthState } from './interface'

const initialState: AuthState = {
	auth: {
		credentials: null,
		pending: true
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
		signInRequest: (state, action: SignInRequest) => {
			state.auth.credentials = null
			state.signIn.passport = action.payload.passport
			state.signIn.loading = true
			state.signIn.error = null
		},
		signInSuccess: (state, action: SignInSuccess) => {
			state.auth.credentials = action.payload.credentials
			state.signIn.passport = null
			state.signIn.loading = false
			state.signIn.error = null
		},
		signInFailure: (state, action: ErrorAction) => {
			state.auth.credentials = null
			state.signIn.passport = null
			state.signIn.loading = false
			state.signIn.error = action.payload.error
		},
		signInReset: state => {
			state.signIn.passport = null
			state.auth.credentials = null
			state.signIn.loading = false
			state.signIn.error = null
		},
		logoutRequest: state => {
			state.logout.loading = true
		},
		logoutSuccess: state => {
			state.logout.loading = false
		},
		loadCredentialsFromStorageAction: (state, action: any) => {
			state.auth.credentials = action.payload.credentials
			state.auth.pending = false
		},
		changeAuthState: state => {
			state.auth.pending = false
		}
	}
})

export const {
	signInReset,
	signInRequest,
	signInSuccess,
	signInFailure,
	loadCredentialsFromStorageAction,
	logoutRequest,
	logoutSuccess,
	changeAuthState
} = authSlice.actions
export default authSlice.reducer
