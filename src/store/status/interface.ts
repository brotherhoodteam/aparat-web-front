import { PayloadAction } from '@reduxjs/toolkit'

// type
type StatusMessageType = string
type StatusStatusType = 'success' | 'warn' | 'error'

// data
interface StatusDataType {
	status: StatusStatusType
	message: StatusMessageType
}
// payload
export interface StatusPayload extends PayloadAction<StatusDataType> {}

// State
export interface StatusStateType {
	status: StatusStatusType | null
	message: StatusMessageType | null
}
