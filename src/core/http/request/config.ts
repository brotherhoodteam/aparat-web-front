import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getAuth } from '../../../utils'

export const successRequest = (request: AxiosRequestConfig) => {
	// console.log('successRequest', request)

	const auth = getAuth()

	if (auth && request.url !== '/login') {
		request.headers['Authorization'] = `${auth.token_type} ${auth.access_token}`
	}
	return request
}

// Axios Interseptors
export const failedRequest = (error: AxiosError) => {
	// console.log('failedRequest', Object.keys(error))
	return Promise.reject(error)
}

export const successResponse = (response: AxiosResponse) => {
	// console.log('successResponse', response)

	return response
}
export const failedResponse = (error: AxiosResponse) => {
	// console.log('failedResponse', Object.keys(error), error.message)
	return Promise.reject(error)
}
