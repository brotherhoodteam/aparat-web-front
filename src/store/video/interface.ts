import { PayloadAction } from '@reduxjs/toolkit'
import { ErrorType } from '../../interface/exception'

// Types
type VideoType = any
type VideoIdType = string
type Progress = number
// Data
interface FileDataType {
	file: VideoType
}
interface ProgressDataType {
	percent: Progress
}
interface UploadFileDataType {
	video: VideoIdType
}
interface ErrorDataType {
	error: ErrorType
}

// Payloads
export interface UploadFileStartPayloadType extends PayloadAction<FileDataType> {}
export interface UploadFileProgressPayloadType extends PayloadAction<ProgressDataType> {}
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
	percent: number
}
