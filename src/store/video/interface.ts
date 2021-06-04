import { PayloadAction } from '@reduxjs/toolkit'
import { ErrorType } from '../../interface/exception'

// Types
type VideoType = File
type VideoIdType = string

// Data
interface FileDataType {
	file: VideoType
}
interface UploadFileDataType {
	data: VideoIdType
}
interface ErrorDataType {
	error: ErrorType
}

// Payloads
export interface UploadFileStartActionPayloadType extends PayloadAction<FileDataType> {}
export interface UploadFileSuccessActionPayloadType
	extends PayloadAction<UploadFileDataType> {}
export interface UploadFileErrorActionPayloadType extends PayloadAction<ErrorDataType> {}

// actions
export type VideoActionTypes =
	| UploadFileStartActionPayloadType
	| UploadFileSuccessActionPayloadType
	| UploadFileErrorActionPayloadType

// state
export interface VideoStateType {
	data: VideoIdType | null
	error: ErrorType | null
	loading: boolean
}
