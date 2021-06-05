import { PayloadAction } from '@reduxjs/toolkit'

// type
type StatusType = 'success' | 'warn' | 'error' | 'info'

// data
interface StatusDataType {
	status: StatusType
	message: string
}

// payload
export interface StatusPayloadType extends PayloadAction<StatusDataType> {}

// State
export interface StatusStateType {
	status: StatusType | null
	message: string | null
}
