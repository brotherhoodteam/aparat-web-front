import { useSelector } from 'react-redux'
import { selectUserProfile } from './selectors'

export const useUserProfile = () => {
	return useSelector(selectUserProfile)
}
