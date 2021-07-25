import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { useDispatch, useSelector } from 'react-redux'
import Avatar from 'app/elements/avatar'
import Badge from 'app/elements/badge'
import { Link, useRouteMatch } from 'react-router-dom'
import { selectVideo } from 'store/video/selectors'
import { fetchVideoRequest } from 'store/video/slice'
import VideoPlayer from 'app/components/vodeo-player'
import './styles.scss'

interface Props {}
const SingleVideoContainer: React.FC<Props> = ({}) => {
	const dispatch = useDispatch()
	const { params } = useRouteMatch<{ slug: string }>()
	const { data, loading, errors } = useSelector(selectVideo)

	useEffect(() => {
		dispatch(fetchVideoRequest({ slug: params.slug }))
	}, [params])

	return (
		<React.Fragment>
			{/* START HEADER */}
			<Helmet>
				<meta charSet="utf-8" />
				{errors && <title>خطایی رخ داده است</title>}
				{loading && <title>در حال بارگذاری</title>}
				{data && <title>{data.title}</title>}
			</Helmet>
			{/* END HEADER */}

			{/* START MAIN CONTENT */}
			<div className="single-video">
				{/* START ERRORS */}
				{errors && <p>مشکلی پیش آماده </p>}
				{/* END ERRORS */}

				{/* START LOADING */}
				{loading && <p>loding</p>}
				{/* END LOADING */}

				{/* START CONTENT */}
				{!loading && data && (
					<div className="container">
						<div className="row">
							<div className="col-12 col-lg-8">
								<div className="mb-4">
									{/* <ReactPlayer url={data.link}></ReactPlayer> */}
									{/* <ReactPlayer
										playing={true}
										url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
									></ReactPlayer> */}
									<VideoPlayer
										title={data.title}
										url={data.link}
										// url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
									/>
								</div>
							</div>
							<div className="col-12 col-lg-4">
								<Badge color="success" pill>
									پر بازدید
								</Badge>
								<h1 className="text-lh-sm">{data.title}</h1>
								<p>{data.info}</p>
								<div className="d-flex align-items-center me-4">
									<Avatar image={data.user.avatar} alt={data.user.name} size="sm" />
									<span className="d-block ps-2">
										منتشر شده توسط
										<Link to="#" className="link-underline  ps-2">
											{data.user.name}
										</Link>
									</span>
								</div>
							</div>
						</div>
					</div>
				)}
				{/* START CONTENT */}
			</div>
			{/* END MAIN CONTNET */}
		</React.Fragment>
	)
}

export default SingleVideoContainer
