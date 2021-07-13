import React from 'react'
import useClass from 'core/hooks/use-class'
import { Size } from 'core/interface/component'
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
