import { PayloadAction } from '@reduxjs/toolkit'
import { Error } from 'lib/types/exception'

// TYPIES
export interface SignInField {
	username: string
	password: string
}
export type Credentials = {
	access_token: string
	expire_in: number
	refresh_token: number
	token_type: string
}

//  PAYLOAD
export interface SignInRequestPayload {
	passport: SignInField
}
export interface SignInSuccessPayload {
	credentials: Credentials
}
export interface SignInResponsePayload {
	data: Credentials
}
export interface ErrorPayload {
	error: Error
}

// ACTION CREATOR
export interface SignInRequest extends PayloadAction<SignInRequestPayload> {}
export interface SignInSuccess extends PayloadAction<SignInSuccessPayload> {}
export interface ErrorAction extends PayloadAction<ErrorPayload> {}

// ACTIONS
export type AuthActions = SignInRequest | SignInSuccess | ErrorAction

// STATE
export interface AuthState {
	auth: {
		credentials: Credentials | null
		pending: boolean
	}
	signIn: {
		passport: SignInField | null
		loading: boolean
		error: Error | null
	}
	logout: {
		loading: boolean
	}
}
