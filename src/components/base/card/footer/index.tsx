import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface CardFooterProps extends BaseComponent<HTMLDivElement> {}

const CardFooter: React.FC<CardFooterProps> = props => {
	const { children, className, ...attr } = props

	const styles = useClassName({
		defaultClass: 'card-footer',
		appendClassName: className
	})

	return (
		<div className={styles} {...attr}>
			{children}
		</div>
	)
}

export default CardFooter
