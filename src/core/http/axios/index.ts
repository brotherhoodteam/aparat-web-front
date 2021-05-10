import Axios from 'axios'

const axiosInstance = Axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
})

export default axiosInstance
