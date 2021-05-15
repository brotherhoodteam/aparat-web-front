import { UserType } from '../store/user/interface'

export const setAuth = (data: UserType): void => {
	const key = 'auth'
	localStorage.setItem(key, JSON.stringify(data))
}

export const getAuth = (): UserType | null => {
	const key = 'auth'
	let auth = null
	try {
		auth = localStorage.getItem(key)
		if (auth) auth = JSON.parse(auth)
	} catch (error) {}
	return auth
}
