import { PayloadAction } from '@reduxjs/toolkit'

// Models
type AppErrorType = {
	message: string
	status: number
}
// Data
export type ErrorDataType = {
	error: AppErrorType
}

// Payloads
export interface AppErrorActionPayloadType extends PayloadAction<ErrorDataType> {}

// Actions
export type AppActionTypes = AppErrorActionPayloadType

// State
export interface AppStateType {
	drawer: boolean
	overlay: boolean
	loading: boolean
	error: AppErrorType | null
}
