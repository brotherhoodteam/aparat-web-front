import React from 'react'
import { CSSTransition } from 'react-transition-group'
import useClass from 'lib/hooks/use-class'
import { ClassName, Colors } from 'lib/types/component'

import './styles.scss'

interface AlertProps {
	message?: string
	color?: Colors
	className?: ClassName
	animated?: boolean
	show: boolean
}
const Alert: React.FC<AlertProps> = React.memo(
	({ message, color, className, show, animated }) => {
		const colorAlert = `alert-${color}`
		const styles = useClass({
			defaultClass: 'alert',
			optionalClass: {
				[colorAlert]: color,
				'alert-primary': !color
			},
			otherClass: className
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
				<div className={styles} role="alert">
					{message}
				</div>
			</CSSTransition>
		) : show ? (
			<div className={styles} role="alert">
				{message}
			</div>
		) : null
	}
)

export default Alert
