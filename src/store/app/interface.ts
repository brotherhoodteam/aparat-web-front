import { PayloadAction } from '@reduxjs/toolkit'
import { ErrorType } from 'core/interface/exception'

// Data
export interface ErrorDataType {
	error: ErrorType
}

// Payloads
export interface AppErrorPayloadType extends PayloadAction<ErrorDataType> {}

// Actions
export type AppActionTypes = AppErrorPayloadType

// State
export interface AppStateType {
	drawer: boolean
	modal: boolean
	overlay: boolean
	loading: boolean
	error: ErrorType | null
}
