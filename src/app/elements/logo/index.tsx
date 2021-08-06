import React from 'react'
import useClassName from 'lib/hooks/use-class'
import { Size } from 'lib/types/component'
import './index'

interface LogoProp {
	size: Size
}

const Logo: React.FC<LogoProp> = React.memo(() => {
	const styles = useClassName({
		defaultClass: 'logo',
		optionalClass: {}
	})
	return <div className={styles}>ee</div>
})
export default Logo
