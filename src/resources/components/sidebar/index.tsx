import Avatar from '../../elements/avatar'
import { Card, CardBody, CardText, CardTitle } from '../../elements/card'
import { NavbarLink, NavbarSubtitle, NavbarVertical } from '../navbar-vertical'

import avatarImage from '../../../assets/images/img6.jpg'
import ROUTES from '../../../core/router/routes'
import './styles.scss'

const Sidebar: React.FC = () => {
	return (
		<>
			<aside className="sidebar">
				<Card className="mb-3">
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
								slug={ROUTES.DASHBOARD.ADD_VIDEO().link}
							/>
							<NavbarLink
								label="ویدئوهای من"
								icon="tio-video-gallery"
								slug={ROUTES.DASHBOARD.VIDEOS().link}
							/>
							<NavbarLink
								label="دیدگاه"
								icon="tio-comment-text"
								slug={ROUTES.DASHBOARD.COMMENTS().link}
							/>
							<NavbarLink
								label="کانال‌های دنبال شده"
								icon="tio-subscribe"
								slug={ROUTES.DASHBOARD.COMMENTS().link}
							/>
							<NavbarLink
								label="تنظیمات کانال"
								icon="tio-settings-outlined"
								slug={ROUTES.DASHBOARD.SETTINGS().link}
							/>
						</NavbarVertical>
					</CardBody>
				</Card>
			</aside>
		</>
	)
}

export default Sidebar
