import React from 'react'
import useClass from '../../../hooks/use-class'
import './styles.scss'
import { ClassName } from '../../../interface/ui'
interface CardPorps {
	className?: string
	size?: 'lg'
}

interface CardBodyProps extends ClassName {}
interface CardTextProps extends ClassName {}
interface CardTitleProps extends ClassName {}
const Card: React.FC<CardPorps> = React.memo(
	({ children, className, size, ...props }) => {
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
)
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
const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
	return <h4 className={`card-title ${className ? className : ''}`}>{children}</h4>
}
const CardText: React.FC<CardTextProps> = ({ children, className }) => {
	return <p className={`card-text ${className ? className : ''}`}>{children}</p>
}
export { Card, CardHeader, CardBody, CardTitle, CardText }
