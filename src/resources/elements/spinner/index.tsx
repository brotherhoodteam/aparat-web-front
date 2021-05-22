import React from 'react'
import useClass from '../../../hooks/use-class'

import './styles.scss'

interface Props {
	variants: 'grow' | 'border'
	size?: 'sm'
	className?: string
}

const Spinner: React.FC<Props> = React.memo(({ variants, size, className }) => {
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
