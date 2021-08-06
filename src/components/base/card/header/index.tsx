import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface CardHeaderProps extends BaseComponent<HTMLDivElement> {}

const CardHeader: React.FC<CardHeaderProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'card-header',
		appendClassName: className
	})

	return (
		<div className={computedClassName} {...attr}>
			{children}
		</div>
	)
}

export default CardHeader
