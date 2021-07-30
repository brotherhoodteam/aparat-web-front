import { useDispatch, useSelector } from 'react-redux'
import { FetchUserListRequestPayload } from './interface'
import { selectUserList, selectUserProfile } from './selectors'
import { fetchUserListRequest } from './slice'

export const useUserProfile = () => {
	return useSelector(selectUserProfile)
}
export const useUserList = () => {
	const dispatch = useDispatch()

	const selectUserListData = useSelector(selectUserList)
	const fetchUserListData = (params?: FetchUserListRequestPayload) =>
		dispatch(fetchUserListRequest({ page: params?.page, per_page: params?.per_page }))

	return { fetchUserListData, selectUserListData }
}
