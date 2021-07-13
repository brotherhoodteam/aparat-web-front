import { PayloadAction } from '@reduxjs/toolkit'
import { ErrorType } from '../../interface/exception'

export interface SignInType {
	username: string
	password: string
}

export type CredentialsType = {
	access_token: string
	expire_in: number
	refresh_token: number
	token_type: string
}

//  Data Interface
export interface SignInDataType {
	passport: SignInType
}
export interface CredentialsDataType {
	credentials: CredentialsType
}
export interface ErrorDataType {
	error: ErrorType
}

// Payload
export interface SignInPayloadType extends PayloadAction<SignInDataType> {}
export interface SignInSuccessPayloadType extends PayloadAction<CredentialsDataType> {}
export interface SignInFailedPayloadType extends PayloadAction<ErrorDataType> {}

// AUTH RESPONSE TYPES
export interface ResponseAuthType {
	data: CredentialsType
}

// AUTH ACTIONS TYPE
export type UserActionTypes =
	| SignInPayloadType
	| SignInSuccessPayloadType
	| SignInFailedPayloadType

// AUTH STATE TYPE
export interface AuthStateType {
	auth: {
		credentials: CredentialsType | null
	}
	signIn: {
		passport: SignInType | null
		loading: boolean
		error: ErrorType | null
	}
	logout: {
		loading: boolean
	}
}
