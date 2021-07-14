import { useSelector } from 'react-redux'
import { selectAuth } from 'store/auth/selectors'

const useAuth = (isLoggedIn?: boolean) => {
	const auth = useSelector(selectAuth)
	return {
		auth: isLoggedIn !== undefined ? isLoggedIn : !!auth.credentials,
		pending: auth.pending
	}
}

export default useAuth
