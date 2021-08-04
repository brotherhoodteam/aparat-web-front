import { useSelector } from 'react-redux'
import {
	selectDeletedPost,
	selectDraftPost,
	selectPostList,
	selectPostStatistics,
	selectSinglePost,
	selectUploadBanner,
	selectUploadedVideo
} from './selectors'

// HOOKS
export const useDraftPost = () => useSelector(selectDraftPost)
export const useSinglePost = () => useSelector(selectSinglePost)
export const useDeletedPost = () => useSelector(selectDeletedPost)
export const usePostStatistics = () => useSelector(selectPostStatistics)
export const usePostList = () => useSelector(selectPostList)
export const useUploadedVideo = () => useSelector(selectUploadedVideo)
export const useUploadBanner = () => useSelector(selectUploadBanner)
