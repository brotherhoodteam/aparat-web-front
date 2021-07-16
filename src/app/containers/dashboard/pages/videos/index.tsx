import React, { useEffect } from 'react'
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
import NoData from 'app/components/no-data'

interface Props {}

const DashboardVideoList: React.FC<Props> = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const query = useQuery()
	const q = Number(query.get('page'))

	// Select Videos Store
	const { data, loading } = useSelector(selectListVideo)

	// Set Default page
	useEffect(() => {
		handleChangePage(q)

		return () => {
			// Reset Videos Store when componnet unmounted
			dispatch(videoListResetAction())
		}
	}, [])

	// Fetch Data
	useEffect(() => {
		if (q) {
			dispatch(getVideoListStartAction({ page: q }))
		}
	}, [q])

	useEffect(() => {
		if (data && q) {
			if (q > data.last_page) {
				handleChangePage(data.last_page)
			}
		}
	}, [data])

	// Chnage Pages Query
	const handleChangePage = (page: number | string | null) => {
		console.log('page', page)
		history.push({
			search: `?page=${page ? page : 1}`
		})
	}

	return (
		<div>
			<PanelLayout title="ویدئوهای من">
				<Card>
					<CardHeader>
						<CardTitle className="h5">ویدئوهای من</CardTitle>
					</CardHeader>
					<CardBody>
						{!loading && data ? (
							data.total ? (
								<VideoList videos={data.data} />
							) : (
								<NoData className="mx-auto">متاسفانه ویدئویی وجود ندارد</NoData>
							)
						) : (
							<div className="row">
								<div className="col-12">
									<VideoLoader length={9} size="col-12 col-md-6" />
								</div>
							</div>
						)}
					</CardBody>
					<CardFooter className="my-3">
						{data ? (
							<Pagination
								pageLength={data.last_page}
								active={data.current_page}
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
