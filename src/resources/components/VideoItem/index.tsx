import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { VIDEO_STATE } from '../../../constants'
import { selectCategoriesData } from '../../../store/categories/selectors'
import { VideoType } from '../../../store/video/interface'
import Avatar from '../../elements/avatar'
import Badge from '../../elements/badge'
import Button from '../../elements/button'
import { Card, CardBody, CardImgTop } from '../../elements/card'
import './styles.scss'

interface Props {
	video: VideoType
}

const VideoItem: React.FC<Props> = ({ video }) => {
	const categories = useSelector(selectCategoriesData)
	const category = useMemo(
		() => categories.find(item => item.id === video.category_id),
		[categories, video.category_id]
	)
	const GetPublishDate = () => {
		const date = new Date(video.updated_at)
		return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`
	}
	return (
		<Card className="h-100" bordered>
			<CardImgTop img={video.banner_link}>
				{/* Video Status */}
				<div className="position-absolute top-0 left-0 mt-3 me-3">
					{video.state === VIDEO_STATE.ACCEPTED && (
						<Badge color="success">منتشر شده</Badge>
					)}
					{video.state === VIDEO_STATE.PENDING && <Badge color="info">در‌حال برسی</Badge>}
					{video.state === VIDEO_STATE.CONVERTED && (
						<Badge color="success">تبدیل شده</Badge>
					)}
					{video.state === VIDEO_STATE.BLOCKED && <Badge color="danger">رد شده</Badge>}
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
					<Button classNames="mx-2 ms-0" color="primary" size="sm" variant="soft">
						<i className="tio tio-play-circle me-1"></i>
						نمایش
					</Button>
					<Button classNames="mx-2" color="secondary" size="sm" variant="soft">
						<i className="tio tio-edit me-1"></i>
						ویرایش
					</Button>
					<Button classNames="mx-2" color="danger" size="sm" variant="soft">
						<i className="tio tio-delete me-1"></i>
						حذف
					</Button>
				</div>
			</CardBody>
		</Card>
	)
}

export default VideoItem
