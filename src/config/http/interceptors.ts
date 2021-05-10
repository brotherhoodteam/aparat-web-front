import axiosInstance from './config'
// import { tokenService } from 'services'

// axiosaxiosInstance Global Config  ::Interceptor
const successRequest = (request: any) => {
	// const token = tokenService('token').get()
	// request.headers['Authorization'] = token
	return request
}

// Axios Interseptors
const failedRequest = (error: any) => {
	return Promise.reject(error)
}

const successResponse = (response: any) => {
	return response
}
const failedResponse = (error: any) => {
	return Promise.reject(error)
}

axiosInstance.interceptors.request.use(successRequest, failedRequest)
axiosInstance.interceptors.response.use(successResponse, failedResponse)
