import { Access } from '../core/router/constant'
import useAuth from './use-auth'

const guestRedirectPath = process.env.REACT_APP_GUEST_REDIRECT_PATH || '/'
const protectedRedirectPath = process.env.REACT_APP_PROTECTED_REDIRECT_PATH || '/'

const useAccess = () => {
	const auth = useAuth(true)
	const routerAccess = (access: Access) => {
		let status = null
		let redirect = ''

		if (auth) {
			// if user is logged in
			if (access !== Access.GUEST) {
				status = true
			} else {
				status = false
				redirect = protectedRedirectPath
			}
		} else {
			if (access !== Access.PROTECTED) {
				status = true
			} else {
				status = false
				redirect = guestRedirectPath
			}
		}

		return { status, redirect }
	}
	return { routerAccess }
}

export default useAccess
