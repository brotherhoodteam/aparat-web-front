import { ACCESS } from 'core/router/constant'
import useAuth from 'store/auth/hooks'

const guestRedirectPath = process.env.REACT_APP_GUEST_REDIRECT_PATH || '/'
const protectedRedirectPath = process.env.REACT_APP_PROTECTED_REDIRECT_PATH || '/'

const useAccess = () => {
	const { auth, pending } = useAuth()
	const routerAccess = (access: ACCESS) => {
		let status = null
		let redirect = ''

		if (auth) {
			// if user is logged in
			if (access !== ACCESS.GUEST) {
				status = true
			} else {
				status = false
				redirect = protectedRedirectPath
			}
		} else {
			if (access !== ACCESS.PROTECTED) {
				status = true
			} else {
				status = false
				redirect = guestRedirectPath
			}
		}

		return { status, redirect }
	}
	return { routerAccess, pending }
}

export default useAccess
