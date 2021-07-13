import { useSelector } from 'react-redux'
import { selectAuth } from 'store/auth/selectors'

const useAuth = (isLoggedIn?: boolean) => {
	const auth = useSelector(selectAuth)
	return isLoggedIn !== undefined ? isLoggedIn : !!auth.credentials
}

export default useAuth
