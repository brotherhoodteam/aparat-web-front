import Axios from 'axios'
import { successRequest, failedRequest, successResponse, failedResponse } from './config'

const request = Axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})
request.interceptors.request.use(successRequest, failedRequest)
request.interceptors.response.use(successResponse, failedResponse)

export default request
