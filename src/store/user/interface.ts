import { PayloadAction } from '@reduxjs/toolkit'
import { Error } from 'core/interface/exception'
import { User } from 'core/interface/user'

// PAYLOADS
export interface FetchUserProfileSuccessPayload {
	user: User
}
export interface FetchUserProfileResponsePayload {
	data: User
}

export interface ErrorPayload {
	error: Error
}

// ACTION CREATORS
export interface FetchUserProfileRequest extends PayloadAction<undefined> {}
export interface FetchUserProfileSuccess
	extends PayloadAction<FetchUserProfileSuccessPayload> {}

export interface ErrorAction extends PayloadAction<ErrorPayload> {}

// ACTIONS
export type UsersActions = FetchUserProfileRequest | FetchUserProfileSuccess

// STATE
export type UserState = {
	profile: {
		data: User | null
		loading: boolean
		errors: Error | null
	}
}
