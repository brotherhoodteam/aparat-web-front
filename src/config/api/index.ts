import { AxiosRequestConfig } from 'axios'
import request from 'config/http/request'
import { SignInType } from 'store/auth/interface'
import { CreateCategoryType } from 'store/categories/interface'
import { CreatePlaylistType } from 'store/playlists/interface'
import { PublishVideo, VideoUpdateType } from 'store/video/interface'
import { API_END_POINT } from './constants'

const api = {
	auth: {
		login: (auth: SignInType) => {
			const { method, url } = API_END_POINT.AUTH.LOGIN()
			const config: AxiosRequestConfig = {
				method,
				url,
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
			const { method, url } = API_END_POINT.VIDEO.UPLOAD()
			const data = new FormData()
			data.append('video', file)
			const config: AxiosRequestConfig = {
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				method,
				url,
				onUploadProgress,
				data
			}
			return request(config)
		},
		banner: (
			file: File,
			onUploadProgress: ((progressEvent: any) => void) | undefined
		) => {
			const { method, url } = API_END_POINT.VIDEO.BANNER()
			const data = new FormData()
			data.append('banner', file)
			const config: AxiosRequestConfig = {
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				method,
				url,
				onUploadProgress,
				data
			}
			return request(config)
		},
		publish: (data: PublishVideo) => {
			const { method, url } = API_END_POINT.VIDEO.PUBLISH()
			const config: AxiosRequestConfig = {
				method,
				url,
				data
			}

			return request(config)
		},
		getList: (pagination?: string | number) => {
			const { method, url } = API_END_POINT.VIDEO.GET_LIST(pagination)
			const config: AxiosRequestConfig = {
				method,
				url
			}
			return request(config)
		},
		delete: (slug: string) => {
			const { method, url } = API_END_POINT.VIDEO.DELETE(slug)
			const config: AxiosRequestConfig = {
				method,
				url
			}
			return request(config)
		},
		get: (slug: string) => {
			const { method, url } = API_END_POINT.VIDEO.GET(slug)
			const config: AxiosRequestConfig = {
				method,
				url
			}
			return request(config)
		},
		update: (slug: string, data: VideoUpdateType) => {
			const { method, url } = API_END_POINT.VIDEO.UPDATE(slug)
			const config: AxiosRequestConfig = {
				method,
				url,
				data
			}
			return request(config)
		}
	},
	categories: {
		get: () => {
			const { method, url } = API_END_POINT.CATEGORIES.GET()
			const config: AxiosRequestConfig = {
				method,
				url
			}
			return request(config)
		},
		set: (data: CreateCategoryType) => {
			const { method, url } = API_END_POINT.CATEGORIES.SET()
			const config: AxiosRequestConfig = {
				method,
				url,
				data
			}
			return request(config)
		}
	},
	playlists: {
		get: () => {
			const { method, url } = API_END_POINT.PLAYLISTS.GET()
			const config: AxiosRequestConfig = {
				method,
				url
			}
			return request(config)
		},
		set: (data: CreatePlaylistType) => {
			const { method, url } = API_END_POINT.PLAYLISTS.SET()
			const config: AxiosRequestConfig = {
				method,
				url,
				data
			}
			return request(config)
		}
	},
	tags: {
		get: () => {
			const { method, url } = API_END_POINT.TAGS.GET()
			const config: AxiosRequestConfig = {
				method,
				url
			}
			return request(config)
		},
		set: (data: { title: string }) => {
			const { method, url } = API_END_POINT.TAGS.SET()
			const config: AxiosRequestConfig = {
				method,
				url,
				data
			}
			return request(config)
		}
	}
}

export default api
