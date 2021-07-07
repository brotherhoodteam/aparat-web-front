import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { selectAppOverlay } from '../../../store/app/selectors'

import './styles.scss'

const Overlay = () => {
	const isOpenOverlay = useSelector(selectAppOverlay)
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
