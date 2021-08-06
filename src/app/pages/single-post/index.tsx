import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import Avatar from 'components/base/avatar'
import { Link, useRouteMatch } from 'react-router-dom'
import { fetchVideoRequest } from 'store/post/slice'
import VideoPlayer from 'components/custom/video-player'
import { useSinglePost } from 'store/post/hooks'
import './styles.scss'

interface Props {}
const SinglePostContainer: React.FC<Props> = ({}) => {
	const dispatch = useDispatch()
	const { params } = useRouteMatch<{ slug: string }>()
	const { data, loading, errors } = useSinglePost()

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
									<VideoPlayer title={data.title} url={data.link} />
								</div>
							</div>
							<div className="col-12 col-lg-4">
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

export default SinglePostContainer
