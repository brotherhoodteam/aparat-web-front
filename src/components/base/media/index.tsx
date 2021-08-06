import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import MediaBody from './media-body'
import './styles.scss'

interface MediaProps extends BaseComponent<HTMLDivElement> {}

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

export { MediaBody }
export default Media
