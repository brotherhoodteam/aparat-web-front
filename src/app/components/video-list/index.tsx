import { Video } from 'store/video/interface'
import VideoItem from 'app/components/video-item'

interface Props {
	videos: Array<Video>
}
const VideoList: React.FC<Props> = ({ videos }) => {
	return (
		<div className="row">
			{videos.map((video: Video) => (
				<div className="col-12 col-lg-6 mb-4" key={video.id}>
					<VideoItem video={video} />
				</div>
			))}
		</div>
	)
}
export default VideoList
