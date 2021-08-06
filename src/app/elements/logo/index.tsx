import React from 'react'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent, Size } from 'lib/types/component'
import './index'

interface LogoProp extends BaseComponent<HTMLDivElement> {
	size: Size
}

const Logo: React.FC<LogoProp> = React.memo(props => {
	const { children, className, ...attr } = props
	const computedClassName = useClassName({
		defaultClass: 'logo',
		appendClassName: className
	})

	return <div className={computedClassName} {...attr}></div>
})
export default Logo
