import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import React from 'react'
import Navbar from '../navbar'
import './styles.scss'

interface HeaderProps extends BaseComponent<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = React.memo(props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'header',
		appendClassName: className
	})

	return (
		<header className={computedClassName} {...attr}>
			<Navbar />
		</header>
	)
})

export default Header
