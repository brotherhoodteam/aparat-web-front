import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { selectAppError } from '../../../store/app/selectors'
import { cleanAppErrorAction } from '../../../store/app/slice'

const Notification: React.FC = () => {
	const appError = useSelector(selectAppError)
	const dispatch = useDispatch()

	useEffect(() => {
		if (appError) {
			toast.error(appError.message, {
				onClose: () => {
					dispatch(cleanAppErrorAction())
				}
			})
		}
	}, [appError])

	return (
		<>
			<ToastContainer
				position="bottom-left"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={true}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	)
}
export default Notification
