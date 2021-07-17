import { Card, CardBody, CardHeader, CardTitle } from 'app/elements/card'
import PanelLayout from 'app/layouts/panel'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { selectVideo } from 'store/video/selectors'
import { fetchVideoRequest } from 'store/video/slice'
import './style.scss'

interface Props {}
const DashboardVideo: React.FC<Props> = ({}) => {
	const dispatch = useDispatch()
	const { params } = useRouteMatch<{ slug: string }>()

	const { data, loading, errors } = useSelector(selectVideo)

	useEffect(() => {
		dispatch(fetchVideoRequest({ slug: params.slug }))
	}, [params])

	return (
		<PanelLayout title="جزئیات ویدئو">
			<Card>
				<CardHeader>
					<CardTitle>جزئیات ویدئو</CardTitle>
				</CardHeader>
				<CardBody>
					{/*Start Render Loading */}
					{loading && <div>در حال بارگذاری</div>}
					{/*Finish Content Loading */}

					{/*Start Render Errors */}
					{errors && <p>موردی که می‌خواهید ویرایش کنید پیدا نشد. شاید حذف شده باشد؟</p>}
					{/*Finish Render Errors */}

					{/*Start Render Content */}
					{/*Finish Render Content */}
				</CardBody>
			</Card>
		</PanelLayout>
	)
}
export default DashboardVideo
