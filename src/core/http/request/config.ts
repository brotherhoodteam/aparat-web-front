import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getAuth } from '../../../utils'
import request from './index'

const successRequest = (request: AxiosRequestConfig) => {
	const auth = getAuth()
	if (auth && request.url !== '/login') {
		request.headers['Authorization'] = `${auth.token_type} ${auth.access_token}`
	}
	return request
}

// Axios Interseptors
const failedRequest = (error: AxiosRequestConfig) => {
	return Promise.reject(error)
}

const successResponse = (response: AxiosResponse) => {
	return response
}
const failedResponse = (error: AxiosResponse) => {
	return Promise.reject(error)
}

request.interceptors.request.use(successRequest, failedRequest)
request.interceptors.response.use(successResponse, failedResponse)
