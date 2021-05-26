import { PayloadAction } from '@reduxjs/toolkit'

// STATE TYPES
type AppErrorType = {
	message: string
	status: number
}
// DATA TYPES
export type ErrorDataType = {
	error: AppErrorType
}
// USER PAYLOADS TYPE
export interface AppErrorActionPayloadType extends PayloadAction<ErrorDataType> {}
// USER RESPONSE TYPES
// USER ACTIONS TYPE
export type AppActionTypes = AppErrorActionPayloadType
// USER STATE TYPE
export interface AppStateType {
	error: AppErrorType | null
	drawer: boolean
	overlay: boolean
	loading: boolean
}
