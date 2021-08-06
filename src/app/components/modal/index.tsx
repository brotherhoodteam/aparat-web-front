import { useRef } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import useClickOutside from 'lib/hooks/use-click-outside'
import { Card, CardBody } from 'app/elements/card'
import './styles.scss'
import { BaseComponent } from 'lib/types/component'
import useClassName from 'lib/hooks/use-class'

interface ModalProps extends BaseComponent<HTMLDivElement> {
	isOpen: boolean
	onClose: () => void
}

const modalRoot = document.querySelector('#portal') as HTMLDivElement

const Modal: React.FC<ModalProps> = props => {
	const { children, className, isOpen, onClose, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'modal',
		optionalClass: className
	})

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
			<div className={computedClassName} ref={modalRef} {...attr}>
				<Card>
					<CardBody>{children}</CardBody>
				</Card>
			</div>
		</CSSTransition>,
		modalRoot
	)
}

export default Modal
