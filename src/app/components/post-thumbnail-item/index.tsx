import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ROUTES from 'core/router/routes'
import { useCategories } from 'store/categories/hooks'
import { disableAppOverlay, enableAppOverlay } from 'store/app/slice'
import { selectDeletedPost } from 'store/post/selectors'
import { deleteVideoRequest } from 'store/post/slice'
import { Card, CardBody, CardImgTop } from 'app/elements/card'
import { Link } from 'react-router-dom'
import { Video } from 'lib/types/video'
import './styles.scss'
import { useDeletedPost } from 'store/post/hooks'

interface Props {
	video: Video
}

const PostThumbnailItem: React.FC<Props> = ({ video }) => {
	const dispatch = useDispatch()
	const { done: deleteVideoDone, loading: deleteVideoLoading } = useDeletedPost()
	const { data: categories } = useCategories()

	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

	const category = useMemo(
		() => categories.find(item => item.id === video.category_id),
		[categories, video.category_id]
	)
	const GetPublishDate = () => {
		const date = new Date(video.updated_at).toLocaleDateString('fa-IR')
		return date
	}

	const handleOpenModal = () => {
		dispatch(enableAppOverlay())
		setIsOpenModal(true)
	}
	const handleCloseModal = () => {
		dispatch(disableAppOverlay())
		setIsOpenModal(false)
	}
	const handleDeletePost = () => {
		dispatch(deleteVideoRequest({ slug: video.slug }))
	}

	useEffect(() => {
		if (deleteVideoDone && isOpenModal) {
			handleCloseModal()
		}
	}, [deleteVideoDone])

	return (
		<Card className="h-100" bordered>
			<CardImgTop img={video.banner_link}>
				{/* Video Status */}
				{/* <div className="position-absolute top-0 left-0 mt-3 me-3">
					{video.state === VIDEO_STATE.ACCEPTED().value && (
						<Badge color="success">{VIDEO_STATE.ACCEPTED().label}</Badge>
					)}
					{video.state === VIDEO_STATE.PENDING().value && (
						<Badge color="info">{VIDEO_STATE.PENDING().label}</Badge>
					)}
					{video.state === VIDEO_STATE.CONVERTED().value && (
						<Badge color="success">{VIDEO_STATE.CONVERTED().label}</Badge>
					)}
					{video.state === VIDEO_STATE.BLOCKED().value && (
						<Badge color="danger">{VIDEO_STATE.BLOCKED().label}</Badge>
					)}
				</div> */}
			</CardImgTop>
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
							{GetPublishDate()} انتشار
						</span>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}

export default PostThumbnailItem
