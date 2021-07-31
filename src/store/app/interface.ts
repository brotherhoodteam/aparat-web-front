import { PayloadAction } from '@reduxjs/toolkit'
import { Error } from 'lib/interface/exception'

// TYPIES
export interface ErrorAction {
	error: Error
}

// PAYLOAD
export interface AppErrorPayload extends PayloadAction<ErrorAction> {}

// ACTIONS
export type AppActions = AppErrorPayload

// STATE
export interface AppState {
	drawer: boolean
	modal: boolean
	overlay: boolean
	loading: boolean
	error: Error | null
}
