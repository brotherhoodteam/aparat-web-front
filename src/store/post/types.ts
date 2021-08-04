import { PayloadAction } from '@reduxjs/toolkit'
import { Pagination } from 'lib/types/base'
import { Error } from 'lib/types/exception'
import { Statistics } from 'lib/types/statistic'
import { Video, VideoUpdate } from 'lib/types/video'

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
export interface PostData extends Pagination {
	data: Array<Video>
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

export interface FetchPostRequestPayload {
	slug: string
}
export interface FetchPostSuccessPayload {
	data: Video
}
export interface FetchPostResponsePayload {
	data: Video
}

export interface FetchPostListRequestPayload {
	page?: string | number
	per_page?: string | number
}
export interface FetchPostListSuccessPayload {
	data: PostData
}
export interface FetchPostListResponsePayload {
	data: PostData
}

export interface FetchPostStatisticsRequestPayload {
	slug: string
	renge?: string | number
}
export interface FetchPostStatisticsSuccessPayload {
	statistics: Statistics
}
export interface FetchPostStatisticsResponsePayload {
	data: Statistics
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

export interface DeletePostRequest extends PayloadAction<DeletePostRequestPayload> {}
export interface DeletePostSuccess extends PayloadAction<any> {}

export interface FetchPostListRequest
	extends PayloadAction<FetchPostListRequestPayload | undefined> {}
export interface FetchPostListSuccess
	extends PayloadAction<FetchPostListSuccessPayload> {}

export interface FetchPostRequest extends PayloadAction<FetchPostRequestPayload> {}
export interface FetchPostSuccess extends PayloadAction<FetchPostSuccessPayload> {}

export interface FetchPostStatisticsRequest
	extends PayloadAction<FetchPostStatisticsRequestPayload> {}
export interface FetchPostStatisticsSuccess
	extends PayloadAction<FetchPostStatisticsSuccessPayload> {}

export interface UploadVideoRequest extends PayloadAction<UploadVideoRequestPayload> {}
export interface UploadVideoSuccess extends PayloadAction<UploadVideoSuccessPayload> {}

export interface UploadBannerRequest extends PayloadAction<UploadBannerRequestPayload> {}
export interface UploadBannerSuccess extends PayloadAction<UploadBannerSuccessPayload> {}

export interface Progress extends PayloadAction<ProgressPayload> {}

export interface ErrorAction extends PayloadAction<ErrorPayload> {}

// ACTIONS
export type VideoActions =
	| CreatePostRequest
	| CreatePostSuccess
	| DeletePostRequest
	| DeletePostSuccess
	| UploadVideoRequest
	| UploadVideoSuccess
	| UploadBannerRequest
	| UploadBannerSuccess
	| FetchPostListSuccess
	| ErrorPayload
	| ProgressPayload

// State
export interface PostState {
	draftPost: {
		data: Video | null
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
		data: PostData | null
		loading: boolean
		errors: Error | null
	}
	single: {
		slug: string | null
		data: Video | null
		loading: boolean
		errors: Error | null
	}
	statistics: {
		data: Statistics | null
		slug: string | null
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
