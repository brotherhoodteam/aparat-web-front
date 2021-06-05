import { useSelector } from 'react-redux'
import { selectUser } from '../store/user/selectors'

const useAuth = (isLoggedIn?: boolean) => {
	const auth = useSelector(selectUser)
	return isLoggedIn !== undefined ? isLoggedIn : !!auth
}

export default useAuth
