import Avatar from '../../elements/avatar'
import { Card, CardBody, CardText, CardTitle } from '../../elements/card'
import { NavbarLink, NavbarSubtitle, NavbarVertical } from '../navbar-vertical'

import avatarImage from '../../../assets/images/img6.jpg'

const Sidebar: React.FC = () => {
	return (
		<>
			<aside className="sidebar">
				<Card className=" mb-3">
					<CardBody className="px-0">
						<div className="d-none d-lg-block text-center mb-3">
							<Avatar
								image={avatarImage}
								alt="آرش میلانی"
								size="xxl"
								circle
								className="mb-2"
							/>
							<CardTitle>آرش میلانی</CardTitle>
							<CardText className="font-size-1">arash@example.com</CardText>
						</div>
						<NavbarVertical>
							<NavbarSubtitle label="حساب کاربری" />
							<NavbarLink label="داشتبورد" icon="tio-dashboard-vs" slug="/dashboard" />
							<NavbarLink
								label="ویدئوی جدید"
								icon="tio-share-screen"
								slug="/dashboard/upload"
							/>
							<NavbarLink
								label="ویدئوهای من"
								icon="tio-video-gallery"
								slug="/video-gallery"
							/>
							<NavbarLink label="دیدگاه" icon="tio-comment-text" slug="/comment" />
							<NavbarLink
								label="کانال‌های دنبال شده"
								icon="tio-subscribe"
								slug="/dashboard"
							/>
							<NavbarLink label="آمار" icon="tio-chart-bar-2" slug="/statistics" />
						</NavbarVertical>
					</CardBody>
				</Card>
			</aside>
		</>
	)
}

export default Sidebar
