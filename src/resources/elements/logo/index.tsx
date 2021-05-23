import React from 'react'
import useClass from '../../../hooks/use-class'
import { Size } from '../../../interface/component'
import './index'

interface LogoProp {
	size: Size
}

const Logo: React.FC<LogoProp> = React.memo(() => {
	const styles = useClass({
		defaultClass: 'logo',
		optionalClass: {}
	})
	return <div className={styles}>ee</div>
})
export default Logo
