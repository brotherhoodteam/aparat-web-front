import { PayloadAction } from '@reduxjs/toolkit'
import { Pagination } from 'core/interface/base'
import { Error } from 'core/interface/exception'
import { User } from 'core/interface/user'

// TYPES
export interface UserList extends Pagination {
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
	data: UserList
}
export interface FetchUserListResponsePayload {
	data: UserList
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
		data: UserList | null
		loading: boolean
		errors: Error | null
	}
}
