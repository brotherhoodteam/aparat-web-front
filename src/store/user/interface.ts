import { PayloadAction } from '@reduxjs/toolkit'

// STATE TYPES
export type UserNameType = string
export type PasswordType = string
export type AuthType = {
	access_token: string
	expire_in: number
	refresh_token: number
	token_type: string
}
export type UserErrorType = {
	message: string
	status: number | string
}

// DATA TYPES
export type SignInDataType = {
	username: UserNameType
	password: PasswordType
}
export interface UserDataType {
	user: AuthType
}
export interface ErrorDataType {
	error: UserErrorType
}

// USER PAYLOADS TYPE
export interface SignInActionPayloadType extends PayloadAction<SignInDataType> {}
export interface SignInSuccessActionPayloadType extends PayloadAction<UserDataType> {}
export interface SignInFailedActionPayloadType extends PayloadAction<ErrorDataType> {}

// USER RESPONSE TYPES
export interface ResponseAuthType {
	data: AuthType
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
	auth: AuthType | null
	error: UserErrorType | null
	loading: boolean
}
