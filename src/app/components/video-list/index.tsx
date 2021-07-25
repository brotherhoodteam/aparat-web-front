import { Video } from 'store/video/interface'

import { ClassName } from 'core/interface/component'

interface Props {
	videos: Array<Video>
	GridClassName: ClassName
	children: (video: Video) => JSX.Element
}
const VideoList: React.FC<Props> = ({ videos, children, GridClassName }) => {
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
export default VideoList
