import { PayloadAction } from '@reduxjs/toolkit'

// STATE TYPES
type AppErrorType = any
// DATA TYPES
export type ErrorDataType = {
	error: AppErrorType
}
// USER PAYLOADS TYPE
export interface AppErrorActionPayloadType extends PayloadAction<ErrorDataType> {}
// USER RESPONSE TYPES
// USER ACTIONS TYPE
export type AppActionType = AppErrorActionPayloadType
// USER STATE TYPE
export interface AppStateType {
	error: AppErrorActionPayloadType | null
	loading: boolean
}
