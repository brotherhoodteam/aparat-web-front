import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface CardTitleProps extends BaseComponent<HTMLDivElement> {}

const CardTitle: React.FC<CardTitleProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'card-title',
		appendClassName: className
	})

	return (
		<h4 className={computedClassName} {...attr}>
			{children}
		</h4>
	)
}

export default CardTitle
