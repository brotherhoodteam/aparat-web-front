import { AxiosRequestConfig } from 'axios'
import ApiRoutes from './routes'
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
	}
}

export default api
