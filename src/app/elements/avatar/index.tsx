import React from 'react'
import useClass from 'core/hooks/use-class'
import { ClassName, Colors, Size } from 'core/interface/component'
import './styles.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
interface AvatarProps {
	image: string
	size?: Size
	ratio?: '4by3'
	circle?: boolean
	className?: ClassName
	alt: string
	status?: Colors
}
const Avatar: React.FC<AvatarProps> = React.memo(
	({ image, size, className, status, circle, alt, ratio }) => {
		const baseClass = 'avatar'
		const baseStatusClass = 'avatar-status'
		const classSize = `${baseClass}-${size}`
		const classStatusSize = `avatar-${size}-status`
		const classCircle = `${baseClass}-circle`
		const classStatusColor = `${baseStatusClass}-${status}`
		const classRatio = `${baseClass}-${ratio}`
		const styles = useClass({
			defaultClass: baseClass,
			optionalClass: {
				[classSize]: size,
				[classCircle]: circle,
				[classRatio]: ratio
			},
			otherClass: className
		})

		const statusStyles = useClass({
			defaultClass: baseStatusClass,
			optionalClass: {
				[classStatusSize]: status,
				[classStatusColor]: status
			}
		})

		return (
			<span className={styles}>
				<LazyLoadImage effect="blur" src={image} className="avatar-img" alt={alt} />
				{status && <span className={statusStyles}></span>}
			</span>
		)
	}
)
export default Avatar
