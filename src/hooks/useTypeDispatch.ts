import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import { ActionType } from '../store/root.interface'

const useTypedDispatch = (): Dispatch<ActionType> => {
	const dispatch: Dispatch<ActionType> = useDispatch()
	return dispatch
}

export default useTypedDispatch
