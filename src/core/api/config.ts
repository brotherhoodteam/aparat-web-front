import { AxiosRequestConfig } from 'axios'
import request from 'core/http/request'
import { VideoUpdate } from 'lib/types/video'
import { SignInField } from 'store/auth/interface'
import { CreateCategory } from 'store/categories/types'
import { CreatePlaylist } from 'store/playlists/types'
import { CreatePost } from 'store/post/types'
import { API_END_POINT } from './constants'

const api = {
	user: {
		fetchProfile: () => {
			const { method, url } = API_END_POINT.USERS.FETCH_PROFILE()
			const config: AxiosRequestConfig = {
				method,
				url
			}
			return request(config)
		},
		fetchUserList: (page?: string | number, per_page?: string | number) => {
			const { method, url } = API_END_POINT.USERS.FETCH_USER_LIST()
			const config: AxiosRequestConfig = {
				method,
				url
			}
			return request(config)
		},
		fetchFollowerUsers: () => {
			const { method, url } = API_END_POINT.USERS.FETCH_FOLLOWER_USERS()
			const config: AxiosRequestConfig = {
				method,
				url
			}
			return request(config)
		},
		fetchFollowingUsers: () => {
			const { method, url } = API_END_POINT.USERS.FETCH_FOLLOWING_USERS()
			const config: AxiosRequestConfig = {
				method,
				url
			}
			return request(config)
		}
	},
	auth: {
		login: (auth: SignInField) => {
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
		publish: (data: CreatePost) => {
			const { method, url } = API_END_POINT.VIDEO.PUBLISH()
			const config: AxiosRequestConfig = {
				method,
				url,
				data
			}

			return request(config)
		},
		getList: (page?: string | number, per_page?: string | number) => {
			const { method, url } = API_END_POINT.VIDEO.GET_LIST()
			const config: AxiosRequestConfig = {
				method,
				url,
				params: {
					page,
					per_page
				}
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
		update: (slug: string, data: VideoUpdate) => {
			const { method, url } = API_END_POINT.VIDEO.UPDATE(slug)
			const config: AxiosRequestConfig = {
				method,
				url,
				data
			}
			return request(config)
		},
		statistics: (slug: string, renge?: string | number) => {
			const { method, url } = API_END_POINT.VIDEO.STATISTICS(slug)
			const config: AxiosRequestConfig = {
				method,
				url,
				params: {
					last_n_days: renge
				}
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
		set: (data: CreateCategory) => {
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
		set: (data: CreatePlaylist) => {
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
	},
	channels: {}
}

export default api
