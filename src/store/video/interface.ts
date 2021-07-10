import { PayloadAction } from '@reduxjs/toolkit'
import { ErrorType } from '../../interface/exception'
import { TagType } from '../tags/interface'
import { UserType } from '../user/interface'

export interface PublishVideo {
	video_id: string
	title: string
	category: number
	info: string
	tags: Array<number>
	playlist: number | null
	channel: number | null
	banner: string
	publish_at_: string
	enable_comments: boolean
	enable_watermark: boolean
}
export interface VideoType {
	user: UserType
	title: string
	user_id: number
	category_id: number | null
	channel_category_id: number | null
	slug: string
	info: string
	duration: number
	banner: string
	enable_comments: boolean
	publish_at: string | null
	state: string
	updated_at: string
	created_at: string
	id: number
	likeCount: number
	age: number
	link: string
	banner_link: string
	views: number
	tags: Array<TagType>
}

export interface VideoUpdateType {
	user?: UserType
	title?: string
	user_id?: number
	category_id?: number | null
	channel_category_id?: number | null
	slug?: string
	info?: string
	duration?: number
	banner?: string
	enable_comments?: boolean
	publish_at?: string | null
	state?: string
	updated_at?: string
	created_at?: string
	id?: number
	likeCount?: number
	age?: number
	link?: string
	banner_link?: string
	views?: number
	tags?: Array<TagType>
}

export interface VideosType {
	current_page: number
	data: Array<VideoType>
	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	next_page_url: null
	path: string
	per_page: number
	prev_page_url: number | null
	to: number
	total: number
}
// Data
export interface PublishVideoData {
	video: PublishVideo
}
export interface RemoveVideoData {
	slug: string
}
export interface GetVideoData {
	slug: string
}
export interface UpdateVideoData {
	slug: string
	video: VideoUpdateType
}
export interface GetVideoSuccessData {
	video: VideoType
}
export interface PublishResponseData {
	data: VideoType
}
export interface VideosDataType {
	videos: VideosType
}
interface VideoDataType {
	video: File
}
interface BannerDataType {
	banner: File
}
interface ProgressDataType {
	percent: number
}
interface UploadedVideoDataType {
	videoId: string
}
interface UploadedBannerDataType {
	bannerId: string
}
interface ErrorDataType {
	error: ErrorType
}

// Payloads
export interface PublishVideoStartPayloadType extends PayloadAction<PublishVideoData> {}
export interface PublishVideoSuccessPayloadType
	extends PayloadAction<PublishResponseData> {}

export interface UploadVideoStartPayloadType extends PayloadAction<VideoDataType> {}
export interface UploadVideoSuccessPayloadType
	extends PayloadAction<UploadedVideoDataType> {}

export interface UploadBannerStartPayloadType extends PayloadAction<BannerDataType> {}
export interface UploadBannerSuccessPayloadType
	extends PayloadAction<UploadedBannerDataType> {}

export interface RemoveVideoStartPayloadType extends PayloadAction<RemoveVideoData> {}
export interface RemoveVideoSuccessPayloadType extends PayloadAction<any> {}

export interface GetVideoStartPayloadType extends PayloadAction<GetVideoData> {}
export interface GetVideoSuccessPayloadType extends PayloadAction<GetVideoSuccessData> {}

export interface UpdateVideoStartPayloadType extends PayloadAction<UpdateVideoData> {}
export interface UpdateVideoSuccessPayloadType extends PayloadAction<any> {}

export interface GetMyVideosSuccessPayloadType extends PayloadAction<VideosDataType> {}
export interface ErrorPayloadType extends PayloadAction<ErrorDataType> {}
export interface ProgressPayloadType extends PayloadAction<ProgressDataType> {}

// Response
export interface ResponseVideoType {
	data: string
}
export interface ResponseBannerType {
	data: string
}
export interface ResponsePublishType {
	data: VideoType
}
export interface ResponseGetMyVideos {
	data: VideosType
}
export interface ResponseRemoveVideo {
	data: any
}
export interface ResponseGetVideo {
	data: VideoType
}
// actions
export type VideoActionTypes =
	| UploadVideoStartPayloadType
	| UploadVideoSuccessPayloadType
	| UploadBannerStartPayloadType
	| UploadBannerSuccessPayloadType
	| PublishVideoStartPayloadType
	| PublishVideoSuccessPayloadType
	| GetMyVideosSuccessPayloadType
	| RemoveVideoStartPayloadType
	| RemoveVideoSuccessPayloadType
	| ErrorPayloadType
	| ProgressPayloadType

// state
export interface VideoStateType {
	videoId: string | null
	videoErrors: ErrorType | null
	videoLoading: boolean
	videoProgress: number
	bannerId: string | null
	bannerErrors: ErrorType | null
	bannerLoading: boolean
	bannerProgress: number
	publishResponse: VideoType | null
	publishLoading: boolean
	publishErrors: ErrorType | null
	myVideos: VideosType | null
	myVideosLoading: boolean
	myVideosErrors: ErrorType | null
	getVideoSlug: string | null
	getVideoData: VideoType | null
	getVideoLoading: boolean
	getVideoErrors: ErrorType | null
	removeVideoSlug: string | null
	removeVideoDone: boolean
	removeVideoLoading: boolean
	removeVideoErrors: ErrorType | null
	updateVideoSlug: string | null
	updateVideoLoading: boolean
	updateVideoErrors: ErrorType | null
}
