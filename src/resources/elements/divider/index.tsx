import React from 'react'
import useClass from '../../../hooks/use-class'
import './styles.scss'

interface Props {
	className?: string
}
const Divider: React.FC<Props> = React.memo(({ children, className, ...props }) => {
	const baseClass = 'divider'
	const styles = useClass({
		defaultClass: baseClass,
		otherClass: className
	})
	return (
		<div className={styles} {...props}>
			{children}
		</div>
	)
})
export default Divider
