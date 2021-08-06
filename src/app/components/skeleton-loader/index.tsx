import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import AvatarLoader from './avatar'
import AvatarWithTextLoader from './avatar-with-text'
import EditPostLoader from './edit-post'
import PostThumbnailLoader from './post-thumbnail'
import TitleLoader from './title'
import UserProfileLoader from './user-profile'

interface SkeletonLoaderProps extends BaseComponent<HTMLDivElement> {}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = props => {
	const { children, className, ...attr } = props

	const cumputedClassName = useClassName({
		appendClassName: className
	})

	return (
		<div className={cumputedClassName} {...attr}>
			{children}
		</div>
	)
}

export {
	AvatarLoader,
	AvatarWithTextLoader,
	EditPostLoader,
	PostThumbnailLoader,
	TitleLoader,
	UserProfileLoader
}
export default SkeletonLoader
