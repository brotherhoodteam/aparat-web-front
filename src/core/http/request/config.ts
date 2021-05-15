import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getAuth } from '../../../utils'
import request from './index'

const successRequest = (request: AxiosRequestConfig) => {
	console.log('successRequest', request)

	const auth = getAuth()
	if (auth && request.url !== '/login') {
		request.headers['Authorization'] = `${auth.token_type} ${auth.access_token}`
	}
	return request
}

// Axios Interseptors
const failedRequest = (error: AxiosError) => {
	console.log('failedRequest', error)
	return Promise.reject(error)
}

const successResponse = (response: AxiosResponse) => {
	console.log('successResponse', response)

	return response
}
const failedResponse = (error: AxiosResponse) => {
	console.log('failedResponse', error)

	return Promise.reject(error)
}

request.interceptors.request.use(successRequest, failedRequest)
request.interceptors.response.use(successResponse, failedResponse)
