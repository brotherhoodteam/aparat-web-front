import React from 'react'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent, Colors, Size } from 'lib/types/component'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './styles.scss'

interface AvatarProps extends BaseComponent<HTMLDivElement> {
	image: string
	size?: Size
	ratio?: '4by3'
	circle?: boolean
	alt: string
	status?: Colors
}
const Avatar: React.FC<AvatarProps> = React.memo(props => {
	const { image, size, className, status, circle, alt, ratio, children, ...attr } = props

	const baseClass = 'avatar'
	const baseStatusClass = 'avatar-status'
	const classSize = `${baseClass}-${size}`
	const classStatusSize = `avatar-${size}-status`
	const classCircle = `${baseClass}-circle`
	const classStatusColor = `${baseStatusClass}-${status}`
	const classRatio = `${baseClass}-${ratio}`

	const computedClassName = useClassName({
		defaultClass: baseClass,
		optionalClass: {
			[classSize]: size,
			[classCircle]: circle,
			[classRatio]: ratio
		},
		appendClassName: className
	})

	const statusComputedClassName = useClassName({
		defaultClass: baseStatusClass,
		optionalClass: {
			[classStatusSize]: status,
			[classStatusColor]: status
		}
	})

	return (
		<span className={computedClassName} {...attr}>
			<LazyLoadImage effect="blur" src={image} className="avatar-img" alt={alt} />
			{status && <span className={statusComputedClassName}></span>}
		</span>
	)
})
export default Avatar
