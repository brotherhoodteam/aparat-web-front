import { PayloadAction } from '@reduxjs/toolkit'

// STATE TYPES
export type UserNameType = string
export type PasswordType = string
export type UserType = {
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
	user: UserType
}
export interface ErrorDataType {
	error: UserErrorType
}

// USER PAYLOADS TYPE
export interface SignInActionPayloadType extends PayloadAction<SignInDataType> {}
export interface SignInSuccessActionPayloadType extends PayloadAction<UserDataType> {}
export interface SignInFailedActionPayloadType extends PayloadAction<ErrorDataType> {}

// USER RESPONSE TYPES
export interface ResponseUserType {
	data: UserType
}

// USER ACTIONS TYPE
export type UserActionType =
	| SignInActionPayloadType
	| SignInSuccessActionPayloadType
	| SignInFailedActionPayloadType

// USER STATE TYPE
export interface UserStateType {
	username: UserNameType | null
	password: PasswordType | null
	user: UserType | null
	error: UserErrorType | null
	loading: boolean
}
