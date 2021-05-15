import { PayloadAction } from '@reduxjs/toolkit'

type UserNameType = string
type PasswordType = string
export type UserType = {
	access_token: string
	expire_in: number
	refresh_token: number
	token_type: string
}
type UserErrorType = any

export interface UserStateType {
	username: UserNameType | null
	password: PasswordType | null
	user: UserType | null
	error: UserErrorType | null
}

export interface SignInDataType {
	username: UserNameType
	password: PasswordType
}

export interface SignInActionPayloadType extends SignInDataType {}

export interface SignInSuccessActionPayloadType {
	user: UserType
}

export interface SignInFailedActionPayloadType {
	error: UserErrorType
}

export type UserActionType = PayloadAction<
	| UserStateType
	| SignInActionPayloadType
	| SignInSuccessActionPayloadType
	| SignInFailedActionPayloadType
>

export interface ResponseUserType {
	data: UserType
}
