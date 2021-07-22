import React from 'react'
import ROUTES from 'config/router/routes'

import Avatar from 'app/elements/avatar'
import { Card, CardBody, CardText, CardTitle } from 'app/elements/card'
import {
	NavbarLink,
	NavbarSubtitle,
	NavbarVertical
} from 'app/components/navbar-vertical'
import { useUserProfile } from 'store/user/hooks'
import UserProfileLoader from '../content-loader/user-profile'
import './styles.scss'

const Sidebar: React.FC = () => {
	const { data: profile, loading } = useUserProfile()
	return (
		<React.Fragment>
			<aside className="sidebar">
				<Card className="mb-3">
					<CardBody className="px-0">
						<div className="d-block  text-center mb-3">
							{profile && !loading ? (
								<React.Fragment>
									<Avatar
										image={profile.avatar}
										alt={profile.name}
										size="xxl"
										circle
										className="mb-2"
									/>
									<CardTitle>{profile.name}</CardTitle>
									<CardText className="font-size-1">{profile.email}</CardText>
								</React.Fragment>
							) : (
								<UserProfileLoader />
							)}
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
							{/* <NavbarLink
								label="دیدگاه"
								icon="tio-comment-text"
								slug={ROUTES.DASHBOARD.COMMENTS().link}
							/>
							<NavbarLink
								label="کانال‌های دنبال شده"
								icon="tio-subscribe"
								slug={ROUTES.DASHBOARD.COMMENTS().link}
							/> */}
							<NavbarLink
								label="پیکربندی محتوا"
								icon="tio-settings-outlined"
								slug={ROUTES.DASHBOARD.SETTINGS().link}
							/>
						</NavbarVertical>
					</CardBody>
				</Card>
			</aside>
		</React.Fragment>
	)
}

export default Sidebar
