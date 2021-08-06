import React from 'react'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent, Size } from 'lib/types/component'

import CardHeader from './header'
import CardImgTop from './img-top'
import CardBody from './body'
import CardTitle from './title'
import CardText from './text'
import CardFooter from './footer'
import './styles.scss'

interface CardPorps extends BaseComponent<HTMLDivElement> {
	size?: Size
	bordered?: boolean
}

const Card: React.FC<CardPorps> = React.memo(props => {
	const { children, className, size, bordered, ...attr } = props

	const baseClass = 'card'
	const cardSize = `${baseClass}-${size}`

	const computedClassName = useClassName({
		defaultClass: 'card',
		appendClassName: className,
		optionalClass: {
			[cardSize]: size,
			['bordered']: bordered
		}
	})

	return (
		<div className={computedClassName} {...attr}>
			{children}
		</div>
	)
})

export { Card, CardHeader, CardImgTop, CardBody, CardTitle, CardText, CardFooter }
