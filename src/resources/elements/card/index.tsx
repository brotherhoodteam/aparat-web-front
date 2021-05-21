import React from 'react'
import useClass from '../../../hooks/use-class'
import './styles.scss'

interface CardPorps {
	className?: string
	size?: 'lg'
}
interface CardBodyProps {
	className?: string
}

const Card: React.FC<CardPorps> = ({ children, className, size, ...props }) => {
	const baseClass = `card`
	const cardSize = `${baseClass}-${size}`

	const styles = useClass({
		defaultClass: 'card',
		otherClass: className,
		optionalClass: {
			[cardSize]: size
		}
	})

	return (
		<div className={styles} {...props}>
			{children}
		</div>
	)
}
const CardHeader: React.FC<CardBodyProps> = ({ children, className, ...props }) => {
	const styles = useClass({
		defaultClass: 'card-header',
		otherClass: className
	})

	return (
		<div className={styles} {...props}>
			{children}
		</div>
	)
}
const CardBody: React.FC<CardBodyProps> = ({ children, className, ...props }) => {
	const styles = useClass({
		defaultClass: 'card-body',
		otherClass: className
	})

	return (
		<div className={styles} {...props}>
			{children}
		</div>
	)
}
export { Card, CardHeader, CardBody }
