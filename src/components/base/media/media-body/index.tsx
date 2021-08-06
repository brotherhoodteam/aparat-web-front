import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface MediaBodyProps extends BaseComponent<HTMLDivElement> {}

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
export default MediaBody
