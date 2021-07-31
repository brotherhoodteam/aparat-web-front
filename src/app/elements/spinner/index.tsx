import React from 'react'
import useClass from 'lib/hooks/use-class'
import { ClassName, Size } from 'lib/interface/component'

import './styles.scss'

interface SpinnerProps {
	variants: 'grow' | 'border'
	size?: Size
	className?: ClassName
}

const Spinner: React.FC<SpinnerProps> = React.memo(({ variants, size, className }) => {
	const baseClass = 'spinner'
	const variantsClass = `${baseClass}-${variants}`
	const sizeClass = `${baseClass}-${variants}-${size}`

	const styles = useClass({
		defaultClass: baseClass,
		optionalClass: {
			[variantsClass]: true,
			[sizeClass]: size
		},
		otherClass: className
	})
	return <span className={styles} role="status" aria-hidden="true"></span>
})

export default Spinner
