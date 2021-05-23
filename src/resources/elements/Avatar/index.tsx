import React from 'react'
import useClass from '../../../hooks/use-class'
import { ClassName, Colors, Size } from '../../../interface/component'
import './styles.scss'
interface AvatarProps {
	image: string
	size?: Size
	circle?: boolean
	className?: ClassName
	alt: string
	status?: Colors
}
const Avatar: React.FC<AvatarProps> = React.memo(
	({ image, size, className, status, circle, alt }) => {
		const baseClass = 'avatar'
		const baseStatusClass = 'avatar-status'
		const classSize = `${baseClass}-${size}`
		const classStatusSize = `avatar-${size}-status`
		const classCircle = `${baseClass}-circle`
		const classStatusColor = `${baseStatusClass}-${status}`
		const styles = useClass({
			defaultClass: baseClass,
			optionalClass: {
				[classSize]: size,
				[classCircle]: circle
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
				<img src={image} className="avatar-img" alt={alt} />
				{status && <span className={statusStyles}></span>}
			</span>
		)
	}
)
export default Avatar
