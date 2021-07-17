import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import { Actions } from 'config/redux/interface'

const useTypedDispatch = (): Dispatch<Actions> => {
	const dispatch: Dispatch<Actions> = useDispatch()
	return dispatch
}

export default useTypedDispatch
