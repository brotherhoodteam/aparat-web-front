import { CSSTransition } from 'react-transition-group'
import { useAppOverlay } from 'store/app/hooks'

import './styles.scss'

const Overlay = () => {
	const isOpenOverlay = useAppOverlay()
	return (
		<CSSTransition
			timeout={200}
			in={isOpenOverlay}
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
			<div className="overlay" />
		</CSSTransition>
	)
}

export default Overlay
