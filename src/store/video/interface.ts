import { PayloadAction } from '@reduxjs/toolkit'

// Types
type VideoFileType = File
type DataIdType = string
type UploadError = any

// Data Types
interface FileUploadStartDataType {
	file: VideoFileType
}

interface FileUploadSucessDataType {
	data: DataIdType
}

interface FileUploadErrorDataType {
	error: UploadError
}

// Payload Tyes
export interface FileUploadStartPayloadType
	extends PayloadAction<FileUploadStartDataType> {}

export interface FileUploadSuccessPayloadType
	extends PayloadAction<FileUploadSucessDataType> {}

export interface FileUploadErrorPayloadType
	extends PayloadAction<FileUploadErrorDataType> {}

export type VideoActionTypes =
	| FileUploadStartPayloadType
	| FileUploadSuccessPayloadType
	| FileUploadErrorPayloadType

export interface VideoStateType {
	file: VideoFileType | null
	data: DataIdType | null
	error: UploadError | null
}
