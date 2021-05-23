import Avatar from '../../elements/avatar'
import { Card, CardBody, CardText, CardTitle } from '../../elements/card'
import avatarImage from '../../../assets/images/img6.jpg'
import { NavbarLink, NavbarSubtitle, NavbarVertical } from '../navbar-vertical'
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
							<NavbarSubtitle title="حساب کاربری" />
							<NavbarLink title="داشتبورد" icon="tio-dashboard-vs" to="/dashboard" />
							<NavbarLink
								title="ویدئوی جدید"
								icon="tio-share-screen"
								to="/dashboard/upload"
							/>
							<NavbarLink
								title="ویدئوهای من"
								icon="tio-video-gallery"
								to="/video-gallery"
							/>
							<NavbarLink title="دیدگاه" icon="tio-comment-text" to="/comment" />
							<NavbarLink
								title="کانال‌های دنبال شده"
								icon="tio-subscribe"
								to="/dashboard"
							/>
							<NavbarLink title="آمار" icon="tio-chart-bar-2" to="/statistics" />
						</NavbarVertical>
					</CardBody>
				</Card>
			</aside>
		</>
	)
}

export default Sidebar
