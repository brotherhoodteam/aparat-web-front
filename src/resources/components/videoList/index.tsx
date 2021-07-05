import { VideoType } from '../../../store/video/interface'
import VideoItem from '../VideoItem'

interface Props {
	videos: Array<VideoType>
}
const VideoList: React.FC<Props> = ({ videos }) => {
	return (
		<div className="row">
			{videos && videos.length === 0 ? (
				<div>متاسفانه ویدئویی وجود ندارد</div>
			) : (
				videos.map((video: VideoType) => (
					<div className="col-12 col-lg-6 mb-4">
						<VideoItem video={video} />
					</div>
				))
			)}
		</div>
	)
}
export default VideoList
