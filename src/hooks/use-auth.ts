import { useSelector } from 'react-redux'
import { selectUserAuth } from '../store/user/selectors'

const useAuth = (isLoggedIn?: boolean) => {
	const auth = useSelector(selectUserAuth)
	return isLoggedIn !== undefined ? isLoggedIn : !!auth
}

export default useAuth
