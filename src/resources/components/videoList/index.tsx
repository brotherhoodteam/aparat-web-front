import { VideoType } from 'store/video/interface'
import VideoItem from 'resources/components/VideoItem'

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
					<div className="col-12 col-lg-6 mb-4" key={video.id}>
						<VideoItem video={video} />
					</div>
				))
			)}
		</div>
	)
}
export default VideoList
