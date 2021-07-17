import { PayloadAction } from '@reduxjs/toolkit'
import { Error } from 'core/interface/exception'
import { User } from 'core/interface/user'
import { Tag } from 'store/tags/interface'

// TYPIES
export interface CreatePost {
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
export interface VideoUpdate {
	user?: User
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
	tags?: Array<Tag>
}
export interface VideoList {
	current_page: number
	data: Array<Video>
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
export interface Video {
	user: User
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
	tags: Array<Tag>
}

// PAYLOADS
export interface CreatePostRequestPayload {
	video: CreatePost
}
export interface CreatePostSuccessPayload {
	data: Video
}
export interface CreatePostResponsePayload {
	data: Video
}

export interface DeletePostRequestPayload {
	slug: string
}
export interface DeletePostResponsePayload {
	data: any
}

export interface UpdatePostRequestPayload {
	slug: string
	video: VideoUpdate
}

export interface FetchVideoListRequestPayload {
	page?: string | number
	per_page?: string
}
export interface FetchVideoListSuccessPayload {
	videos: VideoList
}
export interface FetchVideoListResponsePayload {
	data: VideoList
}

export interface FetchVideoRequestPayload {
	slug: string
}
export interface FetchVideoSuccessPayload {
	video: Video
}
export interface FetchVideoResponsePayload {
	data: Video
}

export interface UploadVideoRequestPayload {
	video: File
}
export interface UploadVideoSuccessPayload {
	videoId: string
}
export interface UploadVideoResponsePayload {
	data: string
}

export interface UploadBannerRequestPayload {
	banner: File
}
export interface UploadBannerSuccessPayload {
	bannerId: string
}
export interface UploadBannerResponsePayload {
	data: string
}

export interface ProgressPayload {
	percent: number
}
export interface ErrorPayload {
	error: Error
}

// ACTION CREATORS
export interface CreatePostRequest extends PayloadAction<CreatePostRequestPayload> {}
export interface CreatePostSuccess extends PayloadAction<CreatePostSuccessPayload> {}

export interface UpdateVideoRequest extends PayloadAction<UpdatePostRequestPayload> {}
export interface UpdateVideoSuccess extends PayloadAction<any> {}

export interface DeleteVideoRequest extends PayloadAction<DeletePostRequestPayload> {}
export interface DeleteVideoSuccess extends PayloadAction<any> {}

export interface FetchVideoListRequest
	extends PayloadAction<FetchVideoListRequestPayload | undefined> {}
export interface FetchVideoListSuccess
	extends PayloadAction<FetchVideoListSuccessPayload> {}

export interface FetchVideoRequest extends PayloadAction<FetchVideoRequestPayload> {}
export interface FetchVideoSuccess extends PayloadAction<FetchVideoSuccessPayload> {}

export interface UploadVideoRequest extends PayloadAction<UploadVideoRequestPayload> {}
export interface UploadVideoSuccess extends PayloadAction<UploadVideoSuccessPayload> {}

export interface UploadBannerRequest extends PayloadAction<UploadBannerRequestPayload> {}
export interface UploadBannerSuccess extends PayloadAction<UploadBannerSuccessPayload> {}

export interface Progress extends PayloadAction<ProgressPayload> {}

export interface ErrorAction extends PayloadAction<ErrorPayload> {}

// ACTIONS
export type VideoActionTypes =
	| CreatePostRequest
	| CreatePostSuccess
	| DeleteVideoRequest
	| DeleteVideoSuccess
	| UploadVideoRequest
	| UploadVideoSuccess
	| UploadBannerRequest
	| UploadBannerSuccess
	| FetchVideoListSuccess
	| ErrorPayload
	| ProgressPayload

// State
export interface VideoState {
	post: {
		response: Video | null
		loading: boolean
		errors: Error | null
	}
	deletePost: {
		slug: string | null
		done: boolean
		loading: boolean
		errors: Error | null
	}
	updatePost: {
		slug: string | null
		loading: boolean
		errors: Error | null
	}
	list: {
		data: VideoList | null
		loading: boolean
		errors: Error | null
	}
	single: {
		slug: string | null
		data: Video | null
		loading: boolean
		errors: Error | null
	}
	uploadVideo: {
		id: string | null
		loading: boolean
		progress: number
		errors: Error | null
	}
	uploadBanner: {
		id: string | null
		loading: boolean
		progress: number
		errors: Error | null
	}
}
