import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VIDEO_STATE, VIDEO_STATE_TITLE } from '../../../../constants'
import { VideoType } from '../../../../store/video/interface'
import {
	selectMyVideosData,
	selectMyVideosErrors,
	selectMyVideosLoading
} from '../../../../store/video/selectors'
import { getMyVideosStart } from '../../../../store/video/slice'
import FilterVideos from '../../../components/filter-videos'
import VideoList from '../../../components/videoList'
import { Card, CardBody, CardHeader, CardTitle } from '../../../elements/card'
import PanelLayout from '../../../layouts/panel'

interface Props {}
interface FilterType {
	value: string
	label: string
}

const options = [
	{
		label: 'همه',
		value: 'all'
	},
	{
		label: VIDEO_STATE_TITLE.ACCEPTED,
		value: VIDEO_STATE.ACCEPTED
	},
	{
		label: VIDEO_STATE_TITLE.PENDING,
		value: VIDEO_STATE.PENDING
	},
	{
		label: VIDEO_STATE_TITLE.BLOCKED,
		value: VIDEO_STATE.BLOCKED
	},
	{
		label: VIDEO_STATE_TITLE.CONVERTED,
		value: VIDEO_STATE.CONVERTED
	}
]

const DashboardMyVideos: React.FC<Props> = ({}) => {
	const [state, setState] = useState<FilterType>(options[0])
	const [filteredItems, setFIlteredItems] = useState<Array<VideoType>>([])

	const dispatch = useDispatch()
	const videos = useSelector(selectMyVideosData)
	const videosLoading = useSelector(selectMyVideosLoading)
	const videosErrors = useSelector(selectMyVideosErrors)

	const onFilterChange = (value: any) => {
		setState(value)
	}

	const onFilterItems = (videos: Array<VideoType>) => {
		let filteredItems: Array<VideoType> = []

		if (state.value === 'all') {
			filteredItems = videos
		} else {
			filteredItems = videos.filter(video => video.state === state.value)
		}

		setFIlteredItems(filteredItems)
	}
	const renderVideosLength = () => {
		return (
			<div className="d-flex align-items-center justify-content-end ms-auto h-100">
				<span>{filteredItems.length ? <>تعداد ویدئو {filteredItems.length}</> : ''}</span>
			</div>
		)
	}
	useEffect(() => {
		dispatch(getMyVideosStart())
	}, [])

	useEffect(() => {
		if (videos) {
			onFilterItems(videos.data)
		}
	}, [state.value, videos])

	console.log('videosLoading', videosLoading)
	return (
		<div>
			<PanelLayout title="ویدئوهای من">
				<Card>
					<CardHeader>
						<CardTitle className="h5">ویدئوهای من</CardTitle>
					</CardHeader>
					<CardBody>
						{!videosLoading ? (
							<>
								<div className="row mb-5">
									<div className="col-6">
										<div className="d-flex align-items-center">
											<span className="me-3">وضعیت</span>
											<FilterVideos options={options} onChange={onFilterChange} />
										</div>
									</div>
									<div className="col-6">{renderVideosLength()}</div>
								</div>
								<VideoList videos={filteredItems} />
							</>
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
