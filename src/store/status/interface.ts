import { PayloadAction } from '@reduxjs/toolkit'

// TYPIES
type Status = 'success' | 'warn' | 'error' | 'info'

// PAYLOAD
interface StatusPayload {
	status: Status
	message: string
}

// ACTIONS
export interface ShowStatusPayload extends PayloadAction<StatusPayload> {}

// STATE
export interface StatusState {
	status: Status | null
	message: string | null
}
