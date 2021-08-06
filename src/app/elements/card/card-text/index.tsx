import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface CardTextProps extends BaseComponent<HTMLDivElement> {}

const CardText: React.FC<CardTextProps> = props => {
	const { children, className, ...attr } = props
	const computedClassName = useClassName({
		defaultClass: 'card-text',
		appendClassName: className
	})
	return (
		<p className={computedClassName} {...attr}>
			{children}
		</p>
	)
}

export default CardText
