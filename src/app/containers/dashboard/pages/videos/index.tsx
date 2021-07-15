import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useQuery } from 'core/hooks/use-query'
import { selectListVideo } from 'store/video/selectors'
import VideoList from 'app/components/videoList'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'app/elements/card'
import PanelLayout from 'app/layouts/panel'
import Pagination from 'app/components/pagination'
import { getVideoListStartAction, videoListResetAction } from 'store/video/slice'
import { VideoLoader } from 'app/components/content-loader'

interface Props {}

const DashboardVideoList: React.FC<Props> = () => {
	const [page, setPage] = useState<string | null>(null)
	const dispatch = useDispatch()
	const history = useHistory()
	const query = useQuery()

	// get data
	const { data: videos, loading } = useSelector(selectListVideo)

	useEffect(() => {
		// Set Default Queries
		const q = query.get('page')
		history.push({
			search: `?page=${q ? q : 1}`
		})
		setPage(q ? q : '1')
		return () => {
			dispatch(videoListResetAction())
		}
	}, [])

	// chack data
	useEffect(() => {
		if (videos) {
			if (videos.current_page > videos.last_page) {
				history.push({ pathname: '/notfound' })
			}
		}
	}, [videos])

	// Set Get Videos
	useEffect(() => {
		if (page) {
			dispatch(getVideoListStartAction({ page }))
		}
	}, [page])

	const handleChangePage = (page: number | string) => {
		history.push({
			search: `?page=${page}`
		})
		setPage(page.toString())
	}

	return (
		<div>
			<PanelLayout title="ویدئوهای من">
				<Card>
					<CardHeader>
						<CardTitle className="h5">ویدئوهای من</CardTitle>
					</CardHeader>
					<CardBody>
						{!loading && videos ? (
							<VideoList videos={videos.data} />
						) : (
							<div className="row">
								<div className="col-12">
									<VideoLoader length={9} size="col-12 col-md-6" />
								</div>
							</div>
						)}
					</CardBody>
					<CardFooter className="my-3">
						{videos ? (
							<Pagination
								pageLength={videos.last_page}
								active={videos.current_page}
								onChangePage={handleChangePage}
							/>
						) : null}
					</CardFooter>
				</Card>
			</PanelLayout>
		</div>
	)
}

export default DashboardVideoList
