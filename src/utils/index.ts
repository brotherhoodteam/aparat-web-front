import { AuthType } from '../store/user/interface'

export const setAuth = (data: AuthType): void => {
	const key = 'auth'
	localStorage.setItem(key, JSON.stringify(data))
}

export const getAuth = (): AuthType | null => {
	const key = 'auth'
	let auth = null
	try {
		auth = localStorage.getItem(key)
		if (auth) auth = JSON.parse(auth)
	} catch (error) {}
	return auth
}
