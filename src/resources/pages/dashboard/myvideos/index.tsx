import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VideoType } from '../../../../store/video/interface'
import {
	selectMyVideosData,
	selectMyVideosErrors,
	selectMyVideosLoading
} from '../../../../store/video/selectors'
import { getMyVideosStart } from '../../../../store/video/slice'
import VideoList from '../../../components/videoList'
import { Card, CardBody, CardHeader, CardTitle } from '../../../elements/card'
import PanelLayout from '../../../layouts/panel'

interface Props {}

const DashboardMyVideos: React.FC<Props> = ({}) => {
	const dispatch = useDispatch()
	const videos = useSelector(selectMyVideosData)
	const videosLoading = useSelector(selectMyVideosLoading)
	const videosErrors = useSelector(selectMyVideosErrors)

	useEffect(() => {
		dispatch(getMyVideosStart())
	}, [])

	return (
		<div>
			<PanelLayout title="ویدئوهای من">
				<Card>
					<CardHeader>
						<CardTitle className="h5">ویدئوهای من</CardTitle>
					</CardHeader>
					<CardBody>
						{!videosLoading && videos ? (
							<VideoList videos={videos.data} />
						) : (
							<div>loading</div>
						)}
					</CardBody>
				</Card>
			</PanelLayout>
		</div>
	)
}

export default DashboardMyVideos
