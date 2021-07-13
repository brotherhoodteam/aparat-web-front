import { CredentialsType } from '../store/auth/interface'

export const setAuth = (data: CredentialsType): void => {
	const key = 'auth'
	localStorage.setItem(key, JSON.stringify(data))
}

export const getAuth = (): CredentialsType | null => {
	const key = 'auth'
	let auth = null
	try {
		auth = localStorage.getItem(key)
		if (auth) auth = JSON.parse(auth)
	} catch (error) {}
	return auth
}

export const getErrorInfo = (error: any) => {
	const { response, message, status } = error
	const errorMessage: string = response ? response.data.message : message
	const statusCode: number = response ? response.status : status

	return { errorMessage, statusCode }
}

export const imageResolver = (banner: string) => {
	const baseUrl = process.env.REACT_APP_BASE_URL
	const imgUrl = `${baseUrl}/videos/tmp/${banner}`

	return imgUrl
}
