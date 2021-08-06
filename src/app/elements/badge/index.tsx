import useClassName from 'lib/hooks/use-class'
import { BaseComponent, Colors } from 'lib/types/component'
import './styles.scss'

interface BadgeProps extends BaseComponent<HTMLDivElement> {
	color?: Colors
	pill?: boolean
}

const Badge: React.FC<BadgeProps> = props => {
	const { children, className, color, pill, ...attr } = props

	const badgeColor = `badge-${color}`

	const computedClassName = useClassName({
		defaultClass: 'badge',
		appendClassName: className,
		optionalClass: {
			[badgeColor]: color,
			['badge-pill']: pill
		}
	})

	return (
		<div className={computedClassName} {...attr}>
			{children}
		</div>
	)
}

export default Badge
