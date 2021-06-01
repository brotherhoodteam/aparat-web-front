import { AxiosRequestConfig } from 'axios'
import ApiRoutes from './constants'
import request from '../http/request'
import { SignInDataType } from '../../store/user/interface'

const api = {
	auth: {
		login: ({ username, password }: SignInDataType) => {
			const config: AxiosRequestConfig = {
				method: 'post',
				url: ApiRoutes.USER_LOGIN,
				data: {
					username,
					password,
					grant_type: 'password',
					client_id: 2,
					client_secret: '5Ek0PkvZb52jkQRZfmZZCA7lqQVS0JMhV0lgBsNJ'
				}
			}
			return request(config)
		}
	},
	video: {
		upload: (file: File) => {
			const data = new FormData()
			data.append('video', file)
			const config: AxiosRequestConfig = {
				method: 'post',
				url: ApiRoutes.VIDEO_UPLOAD,
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				data
			}
			return request(config)
		}
	},
	categories: {
		get: () => {
			const config: AxiosRequestConfig = {
				method: 'get',
				url: ApiRoutes.CATEGORIES
			}
			return request(config)
		}
	},
	tags: {
		get: () => {
			const config: AxiosRequestConfig = {
				method: 'get',
				url: ApiRoutes.TAGS
			}
			return request(config)
		}
	}
}

export default api
