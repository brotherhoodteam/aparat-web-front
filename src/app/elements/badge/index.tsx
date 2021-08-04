import useClass from 'lib/hooks/use-class'
import { ClassName, Colors } from 'lib/types/component'
import './styles.scss'

interface Props {
	className?: ClassName
	color?: Colors
	pill?: boolean
}

const Badge: React.FC<Props> = ({ children, className, color, pill }) => {
	const badgeColor = `badge-${color}`
	const styles = useClass({
		defaultClass: 'badge',
		otherClass: className,
		optionalClass: {
			[badgeColor]: color,
			['badge-pill']: pill
		}
	})

	return <div className={styles}>{children}</div>
}

export default Badge
