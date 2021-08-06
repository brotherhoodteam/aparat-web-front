import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface CardBodyProps extends BaseComponent<HTMLDivElement> {}

const CardBody: React.FC<CardBodyProps> = props => {
	const { children, className, ...attr } = props

	const styles = useClassName({
		defaultClass: 'card-body',
		appendClassName: className
	})

	return (
		<div className={styles} {...attr}>
			{children}
		</div>
	)
}

export default CardBody
