import { Credentials } from 'store/auth/interface'

export const createToken = (key: string) => {
	const props = {
		set: (token: string) => {
			if (!token) {
				throw new Error('Set Token')
			}
			const tokenCode = `Bearer ${token}`
			localStorage.setItem(key, JSON.stringify(tokenCode))
		},
		get: () => localStorage.getItem(key),
		remove: () => localStorage.removeItem(key),
		authorize: (instance: any) => {
			if (!instance) {
				throw new Error('Authorized')
			}
			const tokenCode = props.get()
			instance.defaults.headers['Authorization'] = tokenCode
		},
		unauthorize: (instance: any) => {
			if (!instance) {
				throw new Error('Authorized')
			}
			props.remove()
			instance.defaults.headers['Authorization'] = ''
		}
	}
	return props
}

export const setAuth = (data: Credentials): void => {
	const key = 'auth'
	localStorage.setItem(key, JSON.stringify(data))
}

export const getAuth = (): Credentials | null => {
	const key = 'auth'
	let auth = null
	try {
		auth = localStorage.getItem(key)
		if (auth) auth = JSON.parse(auth)
	} catch (error) {}
	return auth
}
