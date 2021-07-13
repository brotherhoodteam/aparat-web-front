import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VIDEO_STATE from '../../../../constants'
import { VideoType } from '../../../../store/video/interface'
import { selectListVideo } from '../../../../store/video/selectors'
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
		...VIDEO_STATE.ACCEPTED()
	},
	{
		...VIDEO_STATE.PENDING()
	},
	{
		...VIDEO_STATE.BLOCKED()
	},
	{
		...VIDEO_STATE.CONVERTED()
	}
]

const DashboardVideoList: React.FC<Props> = ({}) => {
	const [state, setState] = useState<FilterType>(options[0])
	const [filteredItems, setFIlteredItems] = useState<Array<VideoType>>([])

	// get video
	const { data: videos, loading: videosLoading } = useSelector(selectListVideo)

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
		if (videos) {
			onFilterItems(videos.data)
		}
	}, [state.value, videos])

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

export default DashboardVideoList
