import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import ROUTES from 'core/router/routes'
import { useCategories } from 'store/categories/hooks'
import { disableAppOverlay, enableAppOverlay } from 'store/app/slice'
import { deleteVideoRequest } from 'store/post/slice'
import Avatar from 'components/base/avatar'
import Button from 'components/base/button'
import { Card, CardBody, CardImgTop } from 'components/base/card'
import Modal from 'components/base/modal'
import { Video } from 'lib/types/video'
import { useDeletedPost } from 'store/post/hooks'
import { BaseComponent } from 'lib/types/component'
import useClassName from 'lib/hooks/use-class'
import './styles.scss'

interface PostThumbnailDhashboardItemProps extends BaseComponent<HTMLDivElement> {
	video: Video
}

const PostThumbnailDhashboardItem: React.FC<PostThumbnailDhashboardItemProps> = props => {
	const { className, children, video, ...attr } = props
	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

	const computedClassName = useClassName({
		defaultClass: 'h100',
		appendClassName: className
	})

	const dispatch = useDispatch()
	const { done: deleteVideoDone, loading: deleteVideoLoading } = useDeletedPost()
	const { data: categories } = useCategories()

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
		<Card bordered className={computedClassName} {...attr}>
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
					<h4>{video.title}</h4>
				</div>
				{/* Details */}
				<div className="d-flex align-items-center ml-auto mb-4">
					<div className="text-muted">
						<small className="d-flex align-items-center">
							<i className="fa fa-book-reader d-block d-sm-inline-block mb-1 mb-sm-0 me-1"></i>
							{video.views} ????????????
						</small>
					</div>
					<small className="text-muted mx-2">|</small>
					<div className="text-muted">
						<small className="d-flex align-items-center">
							<i className="fa fa-clock d-block d-sm-inline-block mb-1 mb-sm-0 me-1"></i>
							{video.duration} ??????????
						</small>
					</div>
					<small className="text-muted mx-2">|</small>
					<div className="text-muted">
						<span className="d-flex align-items-center">
							<i className="fa  fa-calendar-day d-block d-sm-inline-block mb-1 mb-sm-0 me-1"></i>
							{GetPublishDate()} ????????????
						</span>
					</div>
					<Avatar
						size="sm"
						image={video.user.avatar}
						alt={video.title}
						className="ms-auto"
					/>
				</div>
				<div className="d-flex align-items-center justify-content-between">
					<Button
						to={{ pathname: ROUTES.VIDEO.SINGLE(video.slug).link }}
						classNames="mx-1 ms-0"
						color="success"
						size="sm"
						variant="soft"
					>
						<i className="tio tio-play-circle me-1"></i>
						????????????
					</Button>
					<Button
						to={{ pathname: ROUTES.DASHBOARD.VIDEO(video.slug).link }}
						classNames="mx-1"
						color="primary"
						size="sm"
						variant="soft"
					>
						<i className="tio tio-chart-bar-4 me-1"></i>
						??????????????
					</Button>
					<Button
						classNames="mx-1"
						to={{ pathname: ROUTES.DASHBOARD.EDIT_VIDEO(video.slug).link }}
						color="secondary"
						size="sm"
						variant="soft"
					>
						<i className="tio tio-edit me-1"></i>
						????????????
					</Button>
					<Button
						classNames="mx-1 me-0"
						color="danger"
						size="sm"
						variant="soft"
						onClick={handleOpenModal}
					>
						<i className="tio tio-delete me-1"></i>
						??????
					</Button>
				</div>
				<Modal isOpen={isOpenModal} onClose={handleCloseModal}>
					<p className="mb-4">
						?????? ?????????? ??????????
						<strong className="mx-1">{video.title}</strong>
						???? ???????????????? ?????? ??????????
					</p>
					<div className="d-flex align-items-center ">
						<Button
							classNames="mx-1"
							color="danger"
							onClick={handleDeletePost}
							loader={deleteVideoLoading}
						>
							??????
						</Button>
						<Button
							classNames="mx-1"
							variant="outline"
							color="danger"
							disanled={deleteVideoLoading}
							onClick={handleCloseModal}
						>
							????????????
						</Button>
					</div>
				</Modal>
			</CardBody>
		</Card>
	)
}

export default PostThumbnailDhashboardItem
