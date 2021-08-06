import React, { CSSProperties, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { StatusState } from 'store/status/types'
import { selectStatus } from 'store/status/selector'
import { clearStatusAction } from 'store/status/slice'
import 'react-toastify/dist/ReactToastify.css'

interface NotificationProps {
	className?: string
	style?: CSSProperties
}

const Notification: React.FC<NotificationProps> = props => {
	const { children, className, ...attr } = props
	const dispatch = useDispatch()
	const statusState = useSelector(selectStatus)

	useEffect(() => {
		if (statusState.status) {
			statusHandler(statusState)
		}
	}, [statusState])

	const statusHandler = (state: StatusState) => {
		switch (state.status) {
			case 'success': {
				toast.success(state.message, {
					onClose: () => {
						dispatch(clearStatusAction())
					}
				})
				break
			}
			case 'warn': {
				toast.warn(state.message, {
					onClose: () => {
						dispatch(clearStatusAction())
					}
				})
				break
			}
			case 'error': {
				toast.error(state.message, {
					onClose: () => {
						dispatch(clearStatusAction())
					}
				})
				break
			}
			default: {
			}
		}
	}
	return (
		<React.Fragment>
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
				className={className}
				{...attr}
			/>
		</React.Fragment>
	)
}
export default Notification
