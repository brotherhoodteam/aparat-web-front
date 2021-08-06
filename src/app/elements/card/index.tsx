import React from 'react'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent, Size } from 'lib/types/component'

import CardHeader from './card-header'
import CardImgTop from './card-img-top'
import CardBody from './card-body'
import CardTitle from './card-title'
import CardText from './card-text'
import CardFooter from './card-footer'
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
