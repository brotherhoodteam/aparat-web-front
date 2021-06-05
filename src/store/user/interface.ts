import { PayloadAction } from '@reduxjs/toolkit'
import { ErrorType } from '../../interface/exception'

// Models
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
	user: SignInType
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

// USER RESPONSE TYPES
export interface ResponseAuthType {
	data: CredentialsType
}

// USER ACTIONS TYPE
export type UserActionTypes =
	| SignInPayloadType
	| SignInSuccessPayloadType
	| SignInFailedPayloadType

// USER STATE TYPE
export interface UserStateType {
	user: SignInType | null
	credentials: CredentialsType | null
	loading: boolean
	error: ErrorType | null
}
