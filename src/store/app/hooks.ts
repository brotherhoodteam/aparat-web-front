import { useSelector } from 'react-redux'
import {
	selectAppDrawer,
	selectAppError,
	selectAppModal,
	selectAppOverlay
} from './selectors'

export const useAppError = () => useSelector(selectAppError)
export const useAppDrawer = () => useSelector(selectAppDrawer)
export const useAppModal = () => useSelector(selectAppModal)
export const useAppOverlay = () => useSelector(selectAppOverlay)
