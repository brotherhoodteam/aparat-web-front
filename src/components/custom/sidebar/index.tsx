import React from 'react'
import ROUTES from 'core/router/routes'

import Avatar from 'components/base/avatar'
import { Card, CardBody, CardText, CardTitle } from 'components/base/card'
import NavbarVertical, {
	NavbarItem,
	NavbarLink,
	NavbarSubtitle
} from 'components/base/navbar-vertical'
import { useUserProfile } from 'store/user/hooks'
import UserProfileLoader from 'components/custom/skeleton/user-profile'
import { BaseComponent } from 'lib/types/component'
import useClassName from 'lib/hooks/use-class'
import './styles.scss'

interface SidebarProps extends BaseComponent<HTMLDivElement> {}

const Sidebar: React.FC<SidebarProps> = props => {
	const { className, children, ...attr } = props
	const { data: profile, loading } = useUserProfile()

	const computedClassName = useClassName({
		defaultClass: 'sidebar',
		optionalClass: className
	})

	return (
		<aside className={computedClassName} {...attr}>
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
						<NavbarItem>
							<NavbarSubtitle>حساب کاربری</NavbarSubtitle>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink icon="tio-dashboard-vs" slug="/dashboard">
								داشتبورد
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink
								icon="tio-share-screen"
								slug={ROUTES.DASHBOARD.ADD_VIDEO().link}
							>
								ویدئوی جدید
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink icon="tio-video-gallery" slug={ROUTES.DASHBOARD.VIDEOS().link}>
								ویدئوهای من
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink icon="tio-comment-text" slug={ROUTES.DASHBOARD.COMMENTS().link}>
								دیدگاه
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink icon="tio-subscribe" slug={ROUTES.DASHBOARD.FOLLOWERS().link}>
								کانال‌های دنبال شده
							</NavbarLink>
						</NavbarItem>
						<NavbarItem>
							<NavbarLink
								icon="tio-settings-outlined"
								slug={ROUTES.DASHBOARD.SETTINGS().link}
							>
								تنظیمات
							</NavbarLink>
						</NavbarItem>
					</NavbarVertical>
				</CardBody>
			</Card>
		</aside>
	)
}

export default Sidebar
