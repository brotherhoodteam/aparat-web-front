import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { CSSTransition } from 'react-transition-group'
import { useAppOverlay } from 'store/app/hooks'

import './styles.scss'

interface OverlayProps extends BaseComponent<HTMLDivElement> {}
const Overlay: React.FC<OverlayProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'overlay',
		appendClassName: className
	})

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
			<div className={computedClassName} {...attr} />
		</CSSTransition>
	)
}

export default Overlay
