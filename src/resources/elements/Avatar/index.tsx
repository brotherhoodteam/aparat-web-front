import React from 'react'
import useClass from '../../../hooks/use-class'
import './styles.scss'
interface Props {
	image: string
	size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
	circle?: boolean
	className?: string
	alt: string
	status?: boolean
	statusVariants?: 'success' | 'danger' | 'warning'
}
const Avatar: React.FC<Props> = React.memo(
	({ image, size, className, status, statusVariants, circle, alt }) => {
		const baseClass = 'avatar'
		const baseStatusClass = 'avatar-status'
		const classSize = `${baseClass}-${size}`
		const classStatusSize = `avatar-${size}-status`
		const classCircle = `${baseClass}-circle`
		const classStatusVariant = `${baseStatusClass}-${statusVariants}`
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
				[classStatusVariant]: status && statusVariants
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
