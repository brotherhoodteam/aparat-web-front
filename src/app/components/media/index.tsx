import useClass from 'core/hooks/use-class'
import { ClassName } from 'core/interface/component'
import './styles.scss'

interface Props {
	className?: ClassName
}
interface MediaBodyProps {}

const Media: React.FC<Props> = ({ children, className }) => {
	const styles = useClass({
		defaultClass: 'media',
		optionalClass: className
	})
	return <div className={styles}>{children}</div>
}

const MediaBody: React.FC<MediaBodyProps> = ({ children }) => {
	return <div className="media-body">{children}</div>
}
export { MediaBody }
export default Media

{
	/* <div className="media align-items-center">
<Avatar image={image} alt={alt} size="sm" circle className="me-2" />
<div className="media-body">
	<span className="media-title h5">{title}</span>
	<span className="media-text">{desc}</span>
</div>
</div> */
}
