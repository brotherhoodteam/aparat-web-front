import useClass from '../../../hooks/use-class'
import './styles.scss'
interface Props {
	image: string
	size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
	circle?: boolean
	className?: string
	alt: string
}
const Avatar: React.FC<Props> = ({ image, size, className, circle, alt }) => {
	const baseClass = 'avatar'
	const classSize = `${baseClass}-${size}`
	const classCircle = `${baseClass}-circle`
	const styles = useClass({
		defaultClass: baseClass,
		optionalClass: {
			[classSize]: size,
			[classCircle]: circle
		},
		otherClass: className
	})
	return (
		<span className={styles}>
			<img src={image} className="avatar-img" alt={alt} />
		</span>
	)
}

export default Avatar
