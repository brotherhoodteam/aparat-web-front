import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import useClass from 'lib/hooks/use-class'
import { ClassName, Size } from 'lib/interface/component'

import ImgaePlacehlder from 'static/images/placeholder.png'
import './styles.scss'

interface CardPorps {
	className?: ClassName
	size?: Size
	bordered?: boolean
}
interface CardHeaderProps {
	className?: ClassName
}
interface CardBodyProps {
	className?: ClassName
}
interface CardImgTopProps {
	className?: ClassName
	img: string
	alt?: string
}
interface CardTextProps {
	className?: ClassName
}
interface CardTitleProps {
	className?: ClassName
}
const Card: React.FC<CardPorps> = React.memo(
	({ children, className, size, bordered, ...props }) => {
		const baseClass = 'card'
		const cardSize = `${baseClass}-${size}`

		const styles = useClass({
			defaultClass: 'card',
			otherClass: className,
			optionalClass: {
				[cardSize]: size,
				['bordered']: bordered
			}
		})

		return (
			<div className={styles} {...props}>
				{children}
			</div>
		)
	}
)
const CardImgTop: React.FC<CardImgTopProps> = ({
	children,
	className,
	img,
	alt,
	...props
}) => {
	const styles = useClass({
		defaultClass: 'card-img position-relative',
		otherClass: className
	})

	return (
		<div className={styles} {...props}>
			<div className="card-img-top">
				<LazyLoadImage
					delayTime={2000}
					placeholderSrc={ImgaePlacehlder}
					effect="blur"
					src={img}
					alt={alt ? alt : ''}
				/>
			</div>
			{children}
		</div>
	)
}
const CardHeader: React.FC<CardHeaderProps> = ({ children, className, ...props }) => {
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
const CardFooter: React.FC<CardBodyProps> = ({ children, className, ...props }) => {
	const styles = useClass({
		defaultClass: 'card-footer',
		otherClass: className
	})

	return (
		<div className={styles} {...props}>
			{children}
		</div>
	)
}
export { Card, CardHeader, CardImgTop, CardBody, CardTitle, CardText, CardFooter }
