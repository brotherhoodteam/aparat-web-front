import { useRef } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import useClickOutside from 'core/hooks/use-click-outside'
import { Card, CardBody } from 'app/elements/card'
import './styles.scss'

interface Props {
	isOpen: boolean
	onClose: () => void
}

const modalRoot = document.querySelector('#portal') as HTMLDivElement

const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
	const modalRef = useRef<HTMLDivElement>(null)
	useClickOutside(modalRef, onClose)

	return ReactDOM.createPortal(
		<CSSTransition
			timeout={300}
			in={isOpen}
			classNames={{
				enter: 'hidden',
				enterActive: 'active',
				enterDone: 'active',
				exit: 'active',
				exitActive: 'hidden',
				exitDone: 'hidden'
			}}
			unmountOnExit
		>
			<div className="modal" ref={modalRef}>
				<Card>
					<CardBody>{children}</CardBody>
				</Card>
			</div>
		</CSSTransition>,
		modalRoot
	)
}

export default Modal
