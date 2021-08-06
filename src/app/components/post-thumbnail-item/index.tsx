import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import ROUTES from 'core/router/routes'
import { useCategories } from 'store/categories/hooks'
import { disableAppOverlay } from 'store/app/slice'
import { Card, CardBody, CardImgTop } from 'app/elements/card'
import { Link } from 'react-router-dom'
import { Video } from 'lib/types/video'
import { useDeletedPost } from 'store/post/hooks'
import { BaseComponent } from 'lib/types/component'
import './styles.scss'

interface PostThumbnailItemProps extends BaseComponent<HTMLDivElement> {
	video: Video
}

const PostThumbnailItem: React.FC<PostThumbnailItemProps> = props => {
	const { className, video, children, ...attr } = props

	const dispatch = useDispatch()
	const { done: deleteVideoDone } = useDeletedPost()
	const { data: categories } = useCategories()

	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

	const category = useMemo(
		() => categories.find(item => item.id === video.category_id),
		[categories, video.category_id]
	)

	const getPublishDate = () => {
		const date = new Date(video.updated_at).toLocaleDateString('fa-IR')
		return date
	}

	const handleCloseModal = () => {
		dispatch(disableAppOverlay())
		setIsOpenModal(false)
	}

	useEffect(() => {
		if (deleteVideoDone && isOpenModal) {
			handleCloseModal()
		}
	}, [deleteVideoDone])

	return (
		<Card className="h-100" bordered {...attr}>
			<CardImgTop img={video.banner_link} />
			<CardBody>
				{/* CateGories */}
				<small className="d-block small font-weight-bold text-cap mb-2">
					{category?.label}
				</small>
				{/* Title */}
				<div className="mb-3">
					<Link to={{ pathname: ROUTES.VIDEO.SINGLE(video.slug).link }}>
						<h4>{video.title}</h4>
					</Link>
				</div>
				{/* Details */}
				<div className="d-flex align-items-center ml-auto mb-4">
					<div className="text-muted">
						<small className="d-flex align-items-center">
							<i className="fa fa-book-reader d-block d-sm-inline-block mb-1 mb-sm-0 me-1"></i>
							{video.views} بازدید
						</small>
					</div>
					<small className="text-muted mx-2">|</small>
					<div className="text-muted">
						<span className="d-flex align-items-center">
							<i className="fa  fa-calendar-day d-block d-sm-inline-block mb-1 mb-sm-0 me-1"></i>
							{getPublishDate()} انتشار
						</span>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default PostThumbnailItem
