import { PayloadAction } from '@reduxjs/toolkit'
import { ErrorType } from '../../interface/exception'

// Types
type Progress = number
// Data
interface VideoDataType {
	video: File
}
interface BannerDataType {
	banner: File
}
interface ProgressDataType {
	percent: Progress
}
interface UploadedVideoDataType {
	video: string
}
interface UploadedBannerDataType {
	banner: string
}
interface ErrorDataType {
	error: ErrorType
}

// Payloads
export interface UploadVideoStartPayloadType extends PayloadAction<VideoDataType> {}
export interface UploadBannerStartPayloadType extends PayloadAction<BannerDataType> {}

export interface UploadVideoSuccessPayloadType
	extends PayloadAction<UploadedVideoDataType> {}
export interface UploadBannerSuccessPayloadType
	extends PayloadAction<UploadedBannerDataType> {}

export interface UploadErrorPayloadType extends PayloadAction<ErrorDataType> {}
export interface UploadProgressPayloadType extends PayloadAction<ProgressDataType> {}

// Response
export interface ResponseVideoType {
	data: string
}
export interface ResponseBannerType {
	data: string
}
// actions
export type VideoActionTypes =
	| UploadVideoStartPayloadType
	| UploadVideoSuccessPayloadType
	| UploadBannerStartPayloadType
	| UploadBannerSuccessPayloadType
	| UploadErrorPayloadType

// state
export interface VideoStateType {
	video: string | null
	videoErrors: ErrorType | null
	videoLoading: boolean
	videoProgress: number
	banner: string | null
	bannerErrors: ErrorType | null
	bannerLoading: boolean
	bannerProgress: number
}
