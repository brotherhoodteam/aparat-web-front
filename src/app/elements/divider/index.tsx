import React from 'react'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import './styles.scss'

interface DividerProps extends BaseComponent<HTMLDivElement> {}

const Divider: React.FC<DividerProps> = React.memo(props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'divider',
		appendClassName: className
	})

	return (
		<div className={computedClassName} {...attr}>
			{children}
		</div>
	)
})
export default Divider
