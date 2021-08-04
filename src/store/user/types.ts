import { PayloadAction } from '@reduxjs/toolkit'
import { Pagination } from 'lib/types/base'
import { Error } from 'lib/types/exception'
import { User } from 'lib/types/user'

// TYPES
export interface UserData extends Pagination {
	data: Array<User>
}

// PAYLOADS
export interface FetchUserProfileSuccessPayload {
	data: User
}
export interface FetchUserProfileResponsePayload {
	data: User
}

export interface FetchUserListRequestPayload {
	page?: string | number
	per_page?: string | number
}
export interface FetchUserListSuccessPayload {
	data: UserData
}
export interface FetchUserListResponsePayload {
	data: UserData
}

export interface ErrorPayload {
	error: Error
}

// ACTION CREATORS
export interface FetchUserProfileRequest extends PayloadAction<undefined> {}
export interface FetchUserProfileSuccess
	extends PayloadAction<FetchUserProfileSuccessPayload> {}

export interface FetchUserListRequest
	extends PayloadAction<FetchUserListRequestPayload | undefined> {}
export interface FetchUserListSuccess
	extends PayloadAction<FetchUserListSuccessPayload> {}

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
	list: {
		data: UserData | null
		loading: boolean
		errors: Error | null
	}
}
