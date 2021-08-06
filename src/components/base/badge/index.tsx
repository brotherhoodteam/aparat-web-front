import useClassName from 'lib/hooks/use-class'
import { BaseComponent, Colors } from 'lib/types/component'
import './styles.scss'

interface BadgeProps extends BaseComponent<HTMLDivElement> {
	color?: Colors
	pill?: boolean
}

const Badge: React.FC<BadgeProps> = props => {
	const { children, className, color, pill, ...attr } = props

	const options = {
		className: 'badge',
		bg: `badge-${color}`,
		pill: 'badge-pill'
	}

	const computedClassName = useClassName({
		defaultClass: options.className,
		appendClassName: className,
		optionalClass: {
			[options.bg]: color,
			[options.pill]: pill
		}
	})

	return (
		<div className={computedClassName} {...attr}>
			{children}
		</div>
	)
}

export default Badge
