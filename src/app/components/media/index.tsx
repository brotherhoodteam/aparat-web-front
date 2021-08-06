import useClassName from 'lib/hooks/use-class'
import { BaseComponent, ClassName } from 'lib/types/component'
import './styles.scss'

interface MediaProps extends BaseComponent<HTMLDivElement> {
	className?: ClassName
}
interface MediaBodyProps extends BaseComponent<HTMLDivElement> {}

const Media: React.FC<MediaProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'media',
		optionalClass: className
	})

	return (
		<div className={computedClassName} {...attr}>
			{children}
		</div>
	)
}

const MediaBody: React.FC<MediaBodyProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'media-body',
		optionalClass: className
	})

	return (
		<div className={computedClassName} {...attr}>
			{children}
		</div>
	)
}
export { MediaBody }
export default Media
