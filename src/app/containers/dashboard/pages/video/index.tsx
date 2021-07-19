import React, { useEffect } from 'react'
import Media, { MediaBody } from 'app/components/media'
import NoData from 'app/components/no-data'
import VideoButtonTools from 'app/components/video-button-tools'
import Avatar from 'app/elements/avatar'
import Button from 'app/elements/button'
import { Card, CardBody, CardHeader, CardTitle } from 'app/elements/card'
import PanelLayout, { PanelHeader, PanelTitle } from 'app/layouts/panel'
import ROUTES from 'config/router/routes'
import VIDEO_STATE from 'core/constants'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { selectVideo } from 'store/video/selectors'
import { fetchVideoRequest } from 'store/video/slice'
import './style.scss'

interface Props {}
const DashboardVideo: React.FC<Props> = () => {
	const dispatch = useDispatch()
	const { params } = useRouteMatch<{ slug: string }>()
	const { data, loading, errors } = useSelector(selectVideo)
	const title = errors ? 'جزئیات ویدئو | خطا' : 'جزئیات ویدئو'

	useEffect(() => {
		dispatch(fetchVideoRequest({ slug: params.slug }))
		// dispatch(fetchVideoStatisticRequest({ slug: params.slug }))
	}, [params])

	console.log('data', data)
	return (
		<PanelLayout title={title}>
			<Card>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardBody>
					{/* ========== ERRORS ========== */}
					{errors && (
						<NoData className="align-items-center justify-content-center">
							<p className="mb-3">
								موردی که می‌خواهید مشاهده کنید پیدا نشد شاید حذف شده باشد؟
							</p>
							<Button
								color="primary"
								variant="soft"
								to={{ pathname: ROUTES.DASHBOARD.VIDEOS().link }}
							>
								رفتن به صفحه‌ی ویدئو‌ها
							</Button>
						</NoData>
					)}
					{/* ========== END ERRORS ========== */}

					{/* ========== LOADING ========== */}
					{loading && <div>در حال بارگذاری</div>}
					{/* ========== END LOADING ========== */}

					{/* ========== MAIN CONTNET ========== */}
					{!loading && data && (
						<React.Fragment>
							{/* --- Page Header --- */}
							<PanelHeader>
								<Media className="mb-3">
									<Avatar
										image={data.banner_link}
										size="xxl"
										ratio="4by3"
										alt={data.title}
										className="me-3"
									/>
									<MediaBody>
										<div className="row">
											<div className="col-lg mb-3 mb-lg-0">
												<Button to={ROUTES.VIDEO.SINGLE(data.slug).link} classNames="p-0">
													<PanelTitle>{data.title}</PanelTitle>
												</Button>
												<div className="row p-2 align-items-center">
													{data.updated_at && (
														<div className="col-auto">
															<span>تاریخ انتشار :</span>
															<span className="text-primary p-0 px-2">
																{new Date(data.updated_at).toLocaleDateString('fa-IR')}
															</span>
														</div>
													)}
													{data.state && (
														<div className="col-auto">
															<span>وضعیت :</span>
															{data.state === VIDEO_STATE.ACCEPTED().value && (
																<span className="text-success p-0 px-2">
																	{VIDEO_STATE.ACCEPTED().label}
																</span>
															)}
															{data.state === VIDEO_STATE.PENDING().value && (
																<span className="text-primary p-0 px-2">
																	{VIDEO_STATE.PENDING().label}
																</span>
															)}
															{data.state === VIDEO_STATE.CONVERTED().value && (
																<span className="text-warning p-0 px-2">
																	{VIDEO_STATE.CONVERTED().label}
																</span>
															)}
															{data.state === VIDEO_STATE.BLOCKED().value && (
																<span className="text-danger p-0 px-2">
																	{VIDEO_STATE.BLOCKED().label}
																</span>
															)}
														</div>
													)}
													{data.user && (
														<div className="col-auto">
															<Media className="align-items-center ">
																<Avatar
																	image={data.user.avatar}
																	alt={data.title}
																	size="xs"
																	circle
																	className="me-2"
																/>
																<MediaBody>
																	<Button
																		to={ROUTES.DASHBOARD.PROFILE(data.user.name).link}
																		classNames="p-0"
																	>
																		{data.user.name}
																	</Button>
																</MediaBody>
															</Media>
														</div>
													)}
												</div>
											</div>
											<div className="col-lg-auto">
												<VideoButtonTools slug={data.slug} />
											</div>
										</div>
									</MediaBody>
								</Media>
							</PanelHeader>
							{/* --- End Page Header --- */}
							{/* --- State --- */}
							<div className="row">
								{/* <div className="col-sm-6 col-lg-4 mb-3 mb-lg-6">
									<Card size="sm">
										<CardBody>
											<Media>
												<i className="tio-video-horizontal nav-icon"></i>
												<MediaBody>
													<h4 className="mb-1">34</h4>
													<span className="d-block">تعداد ویدئوها</span>
												</MediaBody>
											</Media>
										</CardBody>
									</Card>
								</div> */}
								<div className="col-sm-6 col-lg-4 mb-3 mb-lg-6">
									<Card size="sm">
										<CardBody>
											<Media>
												<i className="tio-heart nav-icon"></i>
												<MediaBody>
													<h4 className="mb-1">{data.likeCount}</h4>
													<span className="d-block">تعداد پسند‌ها</span>
												</MediaBody>
											</Media>
										</CardBody>
									</Card>
								</div>
								<div className="col-sm-6 col-lg-4 mb-3 mb-lg-6">
									<Card size="sm">
										<CardBody>
											<Media>
												<i className="tio-chart-bar-1 nav-icon"></i>
												<MediaBody>
													<h4 className="mb-1">{data.views}</h4>
													<span className="d-block">بازدید‌های کل</span>
												</MediaBody>
											</Media>
										</CardBody>
									</Card>
								</div>
								<div className="col-sm-6 col-lg-4 mb-3 mb-lg-6">
									<Card size="sm">
										<CardBody>
											<Media>
												<i className="tio-brightness-2 nav-icon"></i>
												<MediaBody>
													<h4 className="mb-1">400</h4>
													<span className="d-block">بازدید‌های امروز</span>
												</MediaBody>
											</Media>
										</CardBody>
									</Card>
								</div>
							</div>
							{/* --- End State --- */}
						</React.Fragment>
					)}
					{/* --- End Content --- */}
				</CardBody>
			</Card>
		</PanelLayout>
	)
}
export default DashboardVideo
