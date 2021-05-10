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
