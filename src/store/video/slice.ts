import { createSlice } from '@reduxjs/toolkit'
import {
	VideoState,
	CreatePostRequest,
	CreatePostSuccess,
	UpdateVideoRequest,
	UpdateVideoSuccess,
	FetchVideoListRequest,
	FetchVideoListSuccess,
	FetchVideoRequest,
	FetchVideoSuccess,
	UploadVideoRequest,
	UploadVideoSuccess,
	UploadBannerRequest,
	UploadBannerSuccess,
	DeleteVideoRequest,
	DeleteVideoSuccess,
	Progress,
	ErrorAction
} from './interface'

const initialState: VideoState = {
	post: {
		response: null,
		loading: false,
		errors: null
	},
	updatePost: {
		slug: null,
		loading: false,
		errors: null
	},
	deletePost: {
		slug: null,
		done: false,
		loading: false,
		errors: null
	},
	list: {
		data: null,
		loading: false,
		errors: null
	},
	single: {
		slug: null,
		data: null,
		loading: false,
		errors: null
	},
	uploadVideo: {
		id: null,
		loading: false,
		progress: 0,
		errors: null
	},
	uploadBanner: {
		id: null,
		loading: false,
		progress: 0,
		errors: null
	}
}

const videoSlice = createSlice({
	name: 'single',
	initialState,
	reducers: {
		// Create New Post
		createPostRequest: (state, action: CreatePostRequest) => {
			state.post.response = null
			state.post.loading = true
			state.post.errors = null
		},
		createPostSuccess: (state, action: CreatePostSuccess) => {
			state.post.response = action.payload.data
			state.post.loading = false
			state.post.errors = null
		},
		createPostFailure: (state, action: ErrorAction) => {
			state.post.response = null
			state.post.loading = false
			state.post.errors = action.payload.error
		},
		createPostReset: state => {
			state.uploadVideo.id = null
			state.uploadVideo.loading = false
			state.uploadVideo.progress = 0
			state.uploadVideo.errors = null

			state.uploadBanner.id = null
			state.uploadBanner.loading = false
			state.uploadBanner.progress = 0
			state.uploadBanner.errors = null

			state.post.response = null
			state.post.loading = false
			state.post.errors = null
		},

		// Update Post
		updatePostRequest: (state, action: UpdateVideoRequest) => {
			state.updatePost.slug = action.payload.slug
			state.updatePost.loading = true
			state.updatePost.errors = null
		},
		updatePostSuccess: (state, action: UpdateVideoSuccess) => {
			state.updatePost.loading = false
			state.updatePost.errors = null
		},
		updatePostFailure: (state, action: ErrorAction) => {
			state.updatePost.slug = null
			state.updatePost.loading = false
			state.updatePost.errors = action.payload.error
		},

		// Delete Post
		deleteVideoRequest: (state, action: DeleteVideoRequest) => {
			state.deletePost.slug = action.payload.slug
			state.deletePost.done = false
			state.deletePost.loading = true
			state.deletePost.errors = null
		},
		deleteVideoSuccess: (state, action: DeleteVideoSuccess) => {
			state.deletePost.loading = false
			state.deletePost.done = true
			state.deletePost.errors = null
		},
		deleteVideoFailure: (state, action: ErrorAction) => {
			state.deletePost.slug = null
			state.deletePost.done = false
			state.deletePost.loading = false
			state.deletePost.errors = action.payload.error
		},
		deleteVideoReset: state => {
			state.deletePost.slug = null
			state.deletePost.loading = false
			state.deletePost.done = false
			state.deletePost.errors = null
		},

		// Fetch Video list
		fetchVideoListRequest: (state, action: FetchVideoListRequest) => {
			state.list.data = null
			state.list.loading = true
			state.list.errors = null
		},
		fetchVideoListSuccess: (state, action: FetchVideoListSuccess) => {
			state.list.data = action.payload.videos
			state.list.loading = false
			state.list.errors = null
		},
		fetchVideoListFailure: (state, action) => {
			state.list.data = null
			state.list.loading = false
			state.list.errors = action.payload.error
		},
		fetchVideoListReset: state => {
			state.list.data = null
			state.list.loading = false
			state.list.errors = null
		},
		// Fetch Single Video
		fetchVideoRequest: (state, action: FetchVideoRequest) => {
			state.single.slug = action.payload.slug
			state.single.data = null
			state.single.loading = true
			state.single.errors = null
		},
		fetchVideoSuccess: (state, action: FetchVideoSuccess) => {
			state.single.data = action.payload.video
			state.single.loading = false
			state.single.errors = null
		},
		fetchVideoFailure: (state, action: ErrorAction) => {
			state.single.slug = null
			state.single.data = null
			state.single.loading = false
			state.single.errors = action.payload.error
		},
		uploadVideoRequest: (state, action: UploadVideoRequest) => {
			state.uploadVideo.id = null
			state.uploadVideo.loading = true
			state.uploadVideo.progress = 0
			state.uploadVideo.errors = null
		},
		uploadVideoProgress: (state, action: Progress) => {
			state.uploadVideo.id = null
			state.uploadVideo.loading = true
			state.uploadVideo.progress = action.payload.percent
			state.uploadVideo.errors = null
		},
		uploadVideoSuccess: (state, action: UploadVideoSuccess) => {
			state.uploadVideo.id = action.payload.videoId
			state.uploadVideo.loading = false
			state.uploadVideo.errors = null
		},
		uploadVideoFailure: (state, action: ErrorAction) => {
			state.uploadVideo.id = null
			state.uploadVideo.loading = false
			state.uploadVideo.progress = 0
			state.uploadVideo.errors = action.payload.error
		},

		uploadBannerRequest: (state, action: UploadBannerRequest) => {
			state.uploadBanner.id = null
			state.uploadBanner.loading = true
			state.uploadBanner.progress = 0
			state.uploadBanner.errors = null
		},
		uploadBannerProgress: (state, action: Progress) => {
			state.uploadBanner.id = null
			state.uploadBanner.loading = true
			state.uploadBanner.progress = action.payload.percent
			state.uploadBanner.errors = null
		},
		uploadBannerSuccess: (state, action: UploadBannerSuccess) => {
			state.uploadBanner.id = action.payload.bannerId
			state.uploadBanner.loading = false
			state.uploadBanner.errors = null
		},
		uploadBannerFailure: (state, action: ErrorAction) => {
			state.uploadBanner.id = null
			state.uploadBanner.loading = false
			state.uploadBanner.progress = 0
			state.uploadBanner.errors = action.payload.error
		}
	}
})

export const {
	createPostRequest,
	createPostSuccess,
	createPostFailure,
	createPostReset,

	updatePostRequest,
	updatePostSuccess,
	updatePostFailure,

	fetchVideoListRequest,
	fetchVideoListSuccess,
	fetchVideoListFailure,
	fetchVideoListReset,

	fetchVideoRequest,
	fetchVideoSuccess,
	fetchVideoFailure,

	deleteVideoRequest,
	deleteVideoSuccess,
	deleteVideoFailure,
	deleteVideoReset,

	uploadVideoRequest,
	uploadVideoProgress,
	uploadVideoSuccess,
	uploadVideoFailure,

	uploadBannerRequest,
	uploadBannerProgress,
	uploadBannerSuccess,
	uploadBannerFailure
} = videoSlice.actions
export default videoSlice.reducer
