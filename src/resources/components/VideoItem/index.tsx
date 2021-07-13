import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VIDEO_STATE } from 'core/constants'
import ROUTES from 'core/router/routes'
import { useCategories } from 'store/categories/hooks'
import { disableAppOverlayAction, enableAppOverlayAction } from 'store/app/slice'
import { VideoType } from 'store/video/interface'
import { selectrDeleteVideo } from 'store/video/selectors'
import { deleteVideoStartAction } from 'store/video/slice'
import Avatar from 'resources/elements/avatar'
import Badge from 'resources/elements/badge'
import Button from 'resources/elements/button'
import { Card, CardBody, CardImgTop } from 'resources/elements/card'
import Modal from 'resources/components/modal'
import './styles.scss'

interface Props {
	video: VideoType
}

const VideoItem: React.FC<Props> = ({ video }) => {
	const dispatch = useDispatch()
	const { done: deleteVideoDone, loading: deleteVideoLoading } =
		useSelector(selectrDeleteVideo)
	const { data: categories } = useCategories()

	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

	const category = useMemo(
		() => categories.find(item => item.id === video.category_id),
		[categories, video.category_id]
	)
	const GetPublishDate = () => {
		const date = new Date(video.updated_at)
		return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`
	}

	const handleOpenModal = () => {
		dispatch(enableAppOverlayAction())
		setIsOpenModal(true)
	}
	const handleCloseModal = () => {
		dispatch(disableAppOverlayAction())
		setIsOpenModal(false)
	}
	const handleRemoveVideo = () => {
		dispatch(deleteVideoStartAction({ slug: video.slug }))
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
				<div className="position-absolute top-0 left-0 mt-3 me-3">
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
				</div>
			</CardImgTop>
			<CardBody>
				{/* CateGories */}
				<small className="d-block small font-weight-bold text-cap mb-2">
					{category?.label}
				</small>
				{/* Title */}
				<div className="mb-3">
					<h4>{video.title}</h4>
				</div>
				{/* Details */}
				<div className="d-flex align-items-center ml-auto mb-4">
					<div className="small text-muted">
						<small className="d-flex align-items-center">
							<i className="fa fa-book-reader d-block d-sm-inline-block mb-1 mb-sm-0 me-1"></i>
							{video.views} بازدید
						</small>
					</div>
					<small className="text-muted mx-2">|</small>
					<div className="small text-muted">
						<small className="d-flex align-items-center">
							<i className="fa fa-clock d-block d-sm-inline-block mb-1 mb-sm-0 me-1"></i>
							{video.duration} دقیقه
						</small>
					</div>
					<small className="text-muted mx-2">|</small>
					<div className="small text-muted">
						<small className="d-flex align-items-center">
							<i className="fa  fa-calendar-day d-block d-sm-inline-block mb-1 mb-sm-0 me-1"></i>
							{GetPublishDate()} انتشار
						</small>
					</div>
					<Avatar
						size="sm"
						image={video.user.avatar}
						alt={video.title}
						className="ms-auto"
					/>
				</div>
				<div className="d-flex align-items-center">
					<Button
						to={{ pathname: `/${ROUTES.VIDEO.SINGLE(video.slug).link}` }}
						classNames="mx-2 ms-0"
						color="primary"
						size="sm"
						variant="soft"
					>
						<i className="tio tio-play-circle me-1"></i>
						نمایش
					</Button>
					<Button
						classNames="mx-2"
						to={{ pathname: ROUTES.DASHBOARD.EDIT_VIDEO(video.slug).link }}
						color="secondary"
						size="sm"
						variant="soft"
					>
						<i className="tio tio-edit me-1"></i>
						ویرایش
					</Button>
					<Button
						classNames="mx-2"
						color="danger"
						size="sm"
						variant="soft"
						onClick={handleOpenModal}
					>
						<i className="tio tio-delete me-1"></i>
						حذف
					</Button>
				</div>
				<Modal isOpen={isOpenModal} onClose={handleCloseModal}>
					<p className="mb-4">
						آیا مطمئن هستید
						<strong className="mx-1">{video.title}</strong>
						را میخواهید پاک کنید؟
					</p>
					<div className="d-flex justify-content-center align-items-center ">
						<Button
							classNames="mx-1"
							color="danger"
							onClick={handleRemoveVideo}
							loader={deleteVideoLoading}
						>
							حذف
						</Button>
						<Button
							classNames="mx-1"
							color="secondary"
							disanled={deleteVideoLoading}
							onClick={handleCloseModal}
						>
							انصراف
						</Button>
					</div>
				</Modal>
			</CardBody>
		</Card>
	)
}

export default VideoItem
