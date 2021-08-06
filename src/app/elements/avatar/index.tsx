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

	const options = {
		className: 'avatar',
		size: `avatar-${size}`,
		circle: `avatar-circle`,
		ratio: `avatar-${ratio}`,
		status: {
			className: 'avatar-status',
			size: `avatar-${size}-status`,
			color: `avatar-status-${status}`
		}
	}

	const computedClassName = useClassName({
		defaultClass: options.className,
		optionalClass: {
			[options.size]: size,
			[options.circle]: circle,
			[options.ratio]: ratio
		},
		appendClassName: className
	})

	const statusComputedClassName = useClassName({
		defaultClass: options.status.className,
		optionalClass: {
			[options.status.size]: status,
			[options.status.color]: status
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
