import { ClassName } from 'lib/types/component'
import { Video } from 'lib/types/video'

interface Props {
	videos: Array<Video>
	GridClassName: ClassName
	children: (video: Video) => JSX.Element
}
const PostWrapper: React.FC<Props> = ({ videos, children, GridClassName }) => {
	return (
		<div className="row">
			{videos.map((video: Video) => (
				<div className={GridClassName + ' mb-4'} key={video.id}>
					{children(video)}
				</div>
			))}
		</div>
	)
}
export default PostWrapper
