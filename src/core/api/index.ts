import { AxiosRequestConfig } from 'axios'
import ApiRoutes from './constants'
import request from '../http/request'
import { SignInType } from '../../store/user/interface'
import { CreateCategoryType } from '../../store/categories/interface'
import { CreatePlaylistType } from '../../store/playlists/interface'
import { PublishVideo } from '../../store/video/interface'

const api = {
	auth: {
		login: (auth: SignInType) => {
			const config: AxiosRequestConfig = {
				method: 'post',
				url: ApiRoutes.USER_LOGIN,
				data: {
					...auth,
					grant_type: 'password',
					client_id: 2,
					client_secret: '5Ek0PkvZb52jkQRZfmZZCA7lqQVS0JMhV0lgBsNJ'
				}
			}
			return request(config)
		}
	},
	video: {
		upload: (
			file: File,
			onUploadProgress: ((progressEvent: any) => void) | undefined
		) => {
			const data = new FormData()
			data.append('video', file)
			const config: AxiosRequestConfig = {
				method: 'post',
				url: ApiRoutes.VIDEO_UPLOAD,
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				onUploadProgress,
				data
			}
			return request(config)
		},
		banner: (
			file: File,
			onUploadProgress: ((progressEvent: any) => void) | undefined
		) => {
			const data = new FormData()
			data.append('banner', file)
			const config: AxiosRequestConfig = {
				method: 'post',
				url: ApiRoutes.VIDEO_BANNER,
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				onUploadProgress,
				data
			}
			return request(config)
		},
		publish: (data: PublishVideo) => {
			const config: AxiosRequestConfig = {
				method: 'post',
				url: ApiRoutes.VIDEO_PUBLISH,
				data
			}

			return request(config)
		},
		getMyVideos: () => {
			const config: AxiosRequestConfig = {
				method: 'get',
				url: ApiRoutes.VIDEO_MYVIDEOS
			}
			return request(config)
		}
	},
	categories: {
		get: () => {
			const config: AxiosRequestConfig = {
				method: 'get',
				url: ApiRoutes.CATEGORIES_GET
			}
			return request(config)
		},
		set: (data: CreateCategoryType) => {
			const config: AxiosRequestConfig = {
				method: 'post',
				url: ApiRoutes.CATEGORY_SET,
				data
			}
			return request(config)
		}
	},
	playlists: {
		get: () => {
			const config: AxiosRequestConfig = {
				method: 'get',
				url: ApiRoutes.PLAYLISTS_GET
			}
			return request(config)
		},
		set: (data: CreatePlaylistType) => {
			const config: AxiosRequestConfig = {
				method: 'post',
				url: ApiRoutes.PLAYLIST_SET,
				data
			}
			return request(config)
		}
	},
	tags: {
		get: () => {
			const config: AxiosRequestConfig = {
				method: 'get',
				url: ApiRoutes.TAGS_GET
			}
			return request(config)
		},
		set: (data: { title: string }) => {
			const config: AxiosRequestConfig = {
				method: 'post',
				url: ApiRoutes.TAG_SET,
				data
			}
			return request(config)
		}
	}
}

export default api
