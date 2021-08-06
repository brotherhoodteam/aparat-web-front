import React from 'react'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent, Size } from 'lib/types/component'

import './styles.scss'

interface SpinnerProps extends BaseComponent<HTMLSpanElement> {
	variants: 'grow' | 'border'
	size?: Size
}

const Spinner: React.FC<SpinnerProps> = React.memo(props => {
	const { variants, size, className, children, ...attr } = props

	const baseClass = 'spinner'
	const variantsClass = `${baseClass}-${variants}`
	const sizeClass = `${baseClass}-${variants}-${size}`

	const computedClassName = useClassName({
		defaultClass: baseClass,
		optionalClass: {
			[variantsClass]: true,
			[sizeClass]: size
		},
		appendClassName: className
	})

	return <span className={computedClassName} role="status" {...attr}></span>
})

export default Spinner
