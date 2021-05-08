import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import { Action } from '../store/root.interface'

const useTypedDispatch = () => {
	const dispatch: Dispatch<Action> = useDispatch()
	return dispatch
}

export default useTypedDispatch
