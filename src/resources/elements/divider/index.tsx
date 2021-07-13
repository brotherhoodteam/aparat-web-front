import React from 'react'
import useClass from 'core/hooks/use-class'
import { ClassName } from 'core/interface/component'
import './styles.scss'

interface DividerProps {
	className?: ClassName
}
const Divider: React.FC<DividerProps> = React.memo(
	({ children, className, ...props }) => {
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
	}
)
export default Divider
