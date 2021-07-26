import { VideoLoader } from 'app/components/content-loader'
import NoData from 'app/components/no-data'
import Pagination from 'app/components/pagination'
import VideoDashboardItem from 'app/components/video-dashboard-item'
import VideoItem from 'app/components/video-item'
import VideoList from 'app/components/video-list'
import { useQuery } from 'core/hooks/use-query'
import React, { useEffect, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Video } from 'store/video/interface'
import { selectVideoList } from 'store/video/selectors'
import { fetchVideoListRequest, fetchVideoListReset } from 'store/video/slice'
import './styles.scss'

const HomeContainer: React.FC = () => {
	const [params] = useState({
		page: 1,
		perPage: 8
	})
	const dispatch = useDispatch()
	const history = useHistory()
	const query = useQuery()

	// Get Url Params
	const page = Number(query.get('page'))
	const perPage = Number(query.get('per_page'))

	// Select Videos Store
	const { data, loading, errors } = useSelector(selectVideoList)

	useEffect(() => {
		dispatch(fetchVideoListRequest())
	}, [])

	// Set Default Queries
	useEffect(() => {
		handleChangePage(page, perPage)

		return () => {
			// Reset Videos Store when componnet unmounted
			dispatch(fetchVideoListReset())
		}
	}, [])

	// Fetch Data
	useEffect(() => {
		if (page && perPage) {
			dispatch(fetchVideoListRequest({ page, per_page: perPage }))
		}
	}, [page, perPage])

	useEffect(() => {
		if (data && page) {
			if (page > data.last_page) {
				handleChangePage(data.last_page)
			}
		}
	}, [data])

	// Chnage Pages Query
	const handleChangePage = (page?: number | string, perPage?: number | string) => {
		history.push({
			search: `?page=${page ? page : params.page}&per_page=${
				perPage ? perPage : params.perPage
			}`
		})
	}

	const title = useMemo(() => (errors ? 'صفحه اصلی | خطا' : 'صفحه اصلی'), [errors])

	return (
		<div>
			{/* HEADER */}
			<Helmet>
				<meta charSet="utf-8" />
				<title>{title}</title>
			</Helmet>

			<div className="home">
				<section className="home-latest">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								{/*Start Render Loading */}
								{loading && (
									<VideoLoader
										length={params.perPage ? params.perPage : 10}
										size="col-12 col-md-6 col-xl-3"
									/>
								)}

								{/*Start Content Loading */}
								{!loading &&
									data &&
									(data.total ? (
										<React.Fragment>
											<h3 className="mb-3">
												<span>آخرین ویدئوها</span>
											</h3>

											<VideoList
												videos={data.data}
												GridClassName="col-12 col-md-6 col-xl-3"
											>
												{(video: Video) => <VideoItem video={video} />}
											</VideoList>
										</React.Fragment>
									) : (
										<NoData className="mx-auto">
											<p>متاسفانه ویدئویی وجود ندارد</p>
										</NoData>
									))}
								{/*Finish Content Loading */}

								{data ? (
									<Pagination
										pageLength={data.last_page}
										active={data.current_page}
										onChangePage={handleChangePage}
									/>
								) : null}
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
export default HomeContainer
