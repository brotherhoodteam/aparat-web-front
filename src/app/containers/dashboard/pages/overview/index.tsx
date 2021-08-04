import Media, { MediaBody } from 'app/components/media'
import NoData from 'app/components/no-data'
import { Card, CardBody, CardHeader, CardTitle } from 'app/elements/card'
import PanelLayout from 'app/layouts/panel'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useUserList } from 'store/user/hooks'
import { fetchVideoListRequest } from 'store/post/slice'
import './styles.scss'
import { usePostList } from 'store/post/hooks'

const DashboardOverview: React.FC = () => {
	const dispatch = useDispatch()
	const { fetchUserListData, selectUserListData } = useUserList()
	const { data: videosData, loading: videosLoading, errors: videosErros } = usePostList()
	const {
		data: usersData,
		loading: usersLoading,
		errors: usersErrors
	} = selectUserListData

	useEffect(() => {
		fetchUserListData()
		dispatch(fetchVideoListRequest())
	}, [])

	return (
		<PanelLayout title="داشتبورد">
			<Card className="mb-3 mb-lg-5">
				<CardHeader>
					<CardTitle className="h5">داشتبورد</CardTitle>
				</CardHeader>
				<CardBody>
					{/* ========== ERRORS ========== */}
					{usersErrors && (
						<NoData className="align-items-center justify-content-center">
							<p className="mb-3">
								موردی که می‌خواهید مشاهده کنید پیدا نشد شاید حذف شده باشد؟
							</p>
						</NoData>
					)}
					{/* ========== END ERRORS ========== */}

					{/* ========== LOADING ========== */}
					{usersLoading && <div>در حال بارگذاری</div>}
					{/* ========== END LOADING ========== */}

					{/* ========== MAIN CONTNET ========== */}
					{!usersLoading && !videosLoading && usersData && videosData && (
						<div className="row">
							<div className="col-sm-6 col-lg-6 mb-3 mb-lg-6">
								<Card size="sm">
									<CardBody>
										<Media>
											<i className="tio-group-equal nav-icon"></i>
											<MediaBody>
												<h4 className="mb-1">{usersData.total}</h4>
												<span className="d-block">تعداد کاربران</span>
											</MediaBody>
										</Media>
									</CardBody>
								</Card>
							</div>
							<div className="col-sm-6 col-lg-6 mb-3 mb-lg-6">
								<Card size="sm">
									<CardBody>
										<Media>
											<i className="tio-video-horizontal nav-icon"></i>
											<MediaBody>
												<h4 className="mb-1">{videosData?.total}</h4>
												<span className="d-block">تعداد ویدئوها</span>
											</MediaBody>
										</Media>
									</CardBody>
								</Card>
							</div>
						</div>
					)}

					{/* ========== END MAIN CONTNET ========== */}
				</CardBody>
			</Card>
		</PanelLayout>
	)
}

export default DashboardOverview
