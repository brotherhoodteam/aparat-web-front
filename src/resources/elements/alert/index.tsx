import useClass from '../../../hooks/use-class'
import { UiColors } from '../../../interface/ui'

import './styles.scss'

interface Props {
	message?: string
	color?: UiColors
	className?: string
}
const Alert: React.FC<Props> = ({ message, color, className }) => {
	const colorAlert = `alert-${color}`
	const styles = useClass({
		defaultClass: 'alert',
		optionalClass: {
			[colorAlert]: color,
			'alert-primary': !color
		},
		otherClass: className
	})
	return (
		<div className={styles} role="alert">
			{message}
		</div>
	)
}

export default Alert
