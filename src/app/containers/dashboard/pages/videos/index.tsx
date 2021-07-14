import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import VIDEO_STATE from 'core/constants'
import { VideoType } from 'store/video/interface'
import { selectListVideo } from 'store/video/selectors'
import FilterVideos from 'app/components/filter-videos'
import VideoList from 'app/components/videoList'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'app/elements/card'
import PanelLayout from 'app/layouts/panel'
import Pagination from 'app/components/pagination'
import { useHistory } from 'react-router-dom'
import { useQuery } from 'core/hooks/use-query'

import { getVideoListStartAction } from 'store/video/slice'

interface Props {}
interface FilterType {
	value: string
	label: string
}
interface Queries {
	page: string
	filter: string
}

const options = [
	{
		label: 'همه',
		value: 'all'
	},
	VIDEO_STATE.ACCEPTED(),
	VIDEO_STATE.PENDING(),
	VIDEO_STATE.BLOCKED(),
	VIDEO_STATE.CONVERTED()
]

const DashboardVideoList: React.FC<Props> = () => {
	const [filter, setFilter] = useState<FilterType>(options[0])
	const [page, setPage] = useState<string | null>(null)
	const [filteredItems, setFIlteredItems] = useState<Array<VideoType>>([])

	const dispatch = useDispatch()
	const history = useHistory()
	const query = useQuery()

	const { data: videos, loading: videosLoading } = useSelector(selectListVideo)

	// Set Default Queries
	useEffect(() => {
		const q = query.get('page')

		history.push({
			search: `?page=${q ? q : 1}`
		})
		setPage(q ? q : '1')
	}, [])

	// Set Get Videos
	useEffect(() => {
		if (page) {
			dispatch(getVideoListStartAction({ page }))
		}
	}, [page])

	// Filter State videos
	useEffect(() => {
		if (videos) {
			onFilterItems(videos.data)
		}
	}, [filter.value, videos])

	const handleChangePage = (page: number | string) => {
		history.push({
			search: `?page=${page}`
		})
		setPage(page.toString())
	}
	const onFilterChange = (value: any) => {
		setFilter(value)
	}
	const onFilterItems = (videos: Array<VideoType>) => {
		let filteredItems: Array<VideoType> = []

		if (filter.value === 'all') {
			filteredItems = videos
		} else {
			filteredItems = videos.filter(video => video.state === filter.value)
		}

		setFIlteredItems(filteredItems)
	}
	const renderTotalCount = () => {
		return (
			<div className="d-flex align-items-center justify-content-end ms-auto h-100">
				<span>{videos?.total ? <>تعداد ویدئو {videos?.total}</> : ''}</span>
			</div>
		)
	}

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
									<div className="col-6">{renderTotalCount()}</div>
								</div>
								<VideoList videos={filteredItems} />
							</>
						) : (
							<div>loading</div>
						)}
					</CardBody>
					<CardFooter className="my-3">
						{videos ? (
							<Pagination
								pageLength={videos.last_page}
								active={Number(query.get('page')) || 1}
								onChangePage={handleChangePage}
							/>
						) : (
							<div>loading</div>
						)}
					</CardFooter>
				</Card>
			</PanelLayout>
		</div>
	)
}

export default DashboardVideoList
