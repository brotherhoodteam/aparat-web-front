import useClassName from 'lib/hooks/use-class'
import { BaseComponent, ClassName } from 'lib/types/component'
import { Video } from 'lib/types/video'

interface PostWrapperProps extends BaseComponent<HTMLDivElement> {
	videos: Array<Video>
	GridClassName: ClassName
	children: (video: Video) => JSX.Element
}

const PostWrapper: React.FC<PostWrapperProps> = props => {
	const { videos, children, GridClassName, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'row',
		appendClassName: className
	})

	return (
		<div className={computedClassName} {...attr}>
			{videos.map((video: Video) => (
				<div className={GridClassName + ' mb-4'} key={video.id}>
					{children(video)}
				</div>
			))}
		</div>
	)
}
export default PostWrapper
