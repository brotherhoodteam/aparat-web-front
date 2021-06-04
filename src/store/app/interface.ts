import { PayloadAction } from '@reduxjs/toolkit'
import { ErrorType } from '../../interface/exception'

// Data
export type ErrorDataType = {
	error: ErrorType
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
	error: ErrorType | null
}
