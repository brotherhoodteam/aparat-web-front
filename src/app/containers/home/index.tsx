import { VideoLoader } from 'app/components/content-loader'
import NoData from 'app/components/no-data'
import VideoDashboardItem from 'app/components/video-dashboard-item'
import VideoItem from 'app/components/video-item'
import VideoList from 'app/components/video-list'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { Video } from 'store/video/interface'
import { selectVideoList } from 'store/video/selectors'
import { fetchVideoListRequest } from 'store/video/slice'
import './styles.scss'

const HomeContainer: React.FC = () => {
	const dispatch = useDispatch()
	// Select Videos Store
	const { data, loading, errors } = useSelector(selectVideoList)

	useEffect(() => {
		dispatch(fetchVideoListRequest())
	}, [])
	return (
		<div>
			{/* HEADER */}
			<Helmet>
				<meta charSet="utf-8" />
				<title>صفحه اصلی</title>
			</Helmet>

			<div className="home">
				<section className="home-latest">
					<div className="container-fluid">
						{/*Start Render Loading */}
						{loading && (
							<div className="row">
								<div className="col-12">
									<VideoLoader length={10} size="col-12 col-md-6 col-xl-3" />
								</div>
							</div>
						)}

						{/*Start Content Loading */}
						{!loading &&
							data &&
							(data.total ? (
								<VideoList videos={data.data} GridClassName="col-12 col-md-6 col-xl-3">
									{(video: Video) => <VideoItem video={video} />}
								</VideoList>
							) : (
								<NoData className="mx-auto">
									<p>متاسفانه ویدئویی وجود ندارد</p>
								</NoData>
							))}
						{/*Finish Content Loading */}
					</div>
				</section>
			</div>
		</div>
	)
}
export default HomeContainer
