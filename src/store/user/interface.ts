import { PayloadAction } from '@reduxjs/toolkit'

// Models
export type UserNameType = string
export type PasswordType = string
export type CredentialsType = {
	access_token: string
	expire_in: number
	refresh_token: number
	token_type: string
}
export type ErrorType = {
	message: string
	status: number | string
}

//  Data Interface
export type SignInDataType = {
	username: UserNameType
	password: PasswordType
}
export interface UserDataType {
	user: CredentialsType
}
export interface ErrorDataType {
	error: ErrorType
}

// Payload
export interface SignInActionPayloadType extends PayloadAction<SignInDataType> {}
export interface SignInSuccessActionPayloadType extends PayloadAction<UserDataType> {}
export interface SignInFailedActionPayloadType extends PayloadAction<ErrorDataType> {}

// USER RESPONSE TYPES
export interface ResponseAuthType {
	data: CredentialsType
}

// USER ACTIONS TYPE
export type UserActionTypes =
	| SignInActionPayloadType
	| SignInSuccessActionPayloadType
	| SignInFailedActionPayloadType

// USER STATE TYPE
export interface UserStateType {
	username: UserNameType | null
	password: PasswordType | null
	credentials: CredentialsType | null
	error: ErrorType | null
	loading: boolean
}
