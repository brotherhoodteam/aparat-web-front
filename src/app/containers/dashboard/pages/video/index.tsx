import NoData from 'app/components/no-data'
import Button from 'app/elements/button'
import { Card, CardBody, CardHeader, CardTitle } from 'app/elements/card'
import PanelLayout from 'app/layouts/panel'
import ROUTES from 'config/router/routes'
import { useEffect } from 'react'
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
	}, [params])

	return (
		<PanelLayout title={title}>
			<Card>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardBody>
					{/*Start Render Errors */}
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
					{/*Finish Render Errors */}

					{/*Start Render Loading */}
					{loading && <div>در حال بارگذاری</div>}
					{/*Finish Content Loading */}

					{/*Start Render Content */}
					{/*Finish Render Content */}
				</CardBody>
			</Card>
		</PanelLayout>
	)
}
export default DashboardVideo
