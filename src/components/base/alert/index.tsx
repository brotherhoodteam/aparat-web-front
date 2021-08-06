import React from 'react'
import { CSSTransition } from 'react-transition-group'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent, Colors } from 'lib/types/component'

import './styles.scss'

interface AlertProps extends BaseComponent<HTMLDivElement> {
	message?: string
	color?: Colors
	animated?: boolean
	show: boolean
}
const Alert: React.FC<AlertProps> = React.memo(props => {
	const { message, color, show, animated, className, children, ...attr } = props

	const options = {
		bg: {
			default: 'alert-primary',
			color: `alert-${color}`
		}
	}

	const computedClassName = useClassName({
		defaultClass: 'alert',
		optionalClass: {
			[options.bg.color]: color,
			[options.bg.default]: !color
		},
		appendClassName: className
	})

	return animated ? (
		<CSSTransition
			in={show}
			timeout={300}
			classNames={{
				enter: 'alert-init',
				enterActive: 'alert-show',
				enterDone: 'alert-active',
				exit: '',
				exitActive: 'alert-exit',
				exitDone: 'alert-hidden'
			}}
			unmountOnExit
		>
			<div className={computedClassName} {...attr} role="alert">
				{message}
			</div>
		</CSSTransition>
	) : show ? (
		<div className={computedClassName} {...attr} role="alert">
			{message}
		</div>
	) : null
})

export default Alert
