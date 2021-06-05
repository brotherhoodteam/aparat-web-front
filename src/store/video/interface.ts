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
	video: VideoIdType
}
interface ErrorDataType {
	error: ErrorType
}

// Payloads
export interface UploadFileStartPayloadType extends PayloadAction<FileDataType> {}
export interface UploadFileSuccessPayloadType extends PayloadAction<UploadFileDataType> {}
export interface UploadFileErrorPayloadType extends PayloadAction<ErrorDataType> {}

// Response
export interface ResponseVideoType {
	data: VideoIdType
}
// actions
export type VideoActionTypes =
	| UploadFileStartPayloadType
	| UploadFileSuccessPayloadType
	| UploadFileErrorPayloadType

// state
export interface VideoStateType {
	data: VideoIdType | null
	error: ErrorType | null
	loading: boolean
}
