import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useQuery } from 'core/hooks/use-query'
import { selectVideoList } from 'store/video/selectors'
import VideoList from 'app/components/videoList'
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from 'app/elements/card'
import PanelLayout from 'app/layouts/panel'
import Pagination from 'app/components/pagination'
import { fetchVideoListRequest, fetchVideoListReset } from 'store/video/slice'
import { VideoLoader } from 'app/components/content-loader'
import NoData from 'app/components/no-data'
import Button from 'app/elements/button'
import ROUTES from 'config/router/routes'

interface Props {}

const DashboardVideoList: React.FC<Props> = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const query = useQuery()
	const q = Number(query.get('page'))

	// Select Videos Store
	const { data, loading, errors } = useSelector(selectVideoList)
	console.log(data)
	// Set Default page
	useEffect(() => {
		handleChangePage(q)

		return () => {
			// Reset Videos Store when componnet unmounted
			dispatch(fetchVideoListReset())
		}
	}, [])

	// Fetch Data
	useEffect(() => {
		if (q) {
			dispatch(fetchVideoListRequest({ page: q }))
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
		history.push({
			search: `?page=${page ? page : 1}`
		})
	}

	const title = errors ? 'ویرایش ویدئو | خطا' : 'ویرایش ویدئو'
	console.log('loading', loading)
	return (
		<div>
			<PanelLayout title={title}>
				<Card>
					<CardHeader>
						<CardTitle className="h5">{title}</CardTitle>
					</CardHeader>
					<CardBody>
						{/*Start Render Errors */}
						{errors && (
							<NoData className="align-items-center justify-content-center">
								<p className="mb-3">متاسفانه مشکلی پیش آمده</p>
								<Button
									color="primary"
									variant="soft"
									to={{ pathname: ROUTES.DASHBOARD.OVERVIEW().link }}
								>
									رفتن به داشتبورد
								</Button>
							</NoData>
						)}
						{/*Finish Render Errors */}

						{/*Start Render Loading */}
						{loading && (
							<div className="row">
								<div className="col-12">
									<VideoLoader length={9} size="col-12 col-md-6" />
								</div>
							</div>
						)}

						{/*Start Content Loading */}
						{!loading &&
							data &&
							(data.total ? (
								<VideoList videos={data.data} />
							) : (
								<NoData className="mx-auto">
									<p>متاسفانه ویدئویی وجود ندارد</p>
								</NoData>
							))}
						{/*Finish Content Loading */}
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
