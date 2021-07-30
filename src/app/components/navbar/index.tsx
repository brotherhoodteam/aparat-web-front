import { useDispatch } from 'react-redux'

import {
	Dropdown,
	DropdownButton,
	DropdownDivider,
	DropdownHeader,
	DropdownItem,
	DropdownMenu
} from 'app/components/dropdown'
import Avatar from 'app/elements/avatar'
import Media, { MediaBody } from 'app/components/media'
import Button from 'app/elements/button'
import Search from 'app/components/search'
import ROUTES from 'config/router/routes'

import { enableAppDrawer } from 'store/app/slice'
import useAuth from 'store/auth/hooks'

import Logo from 'assets/images/logo--color-black--without_text.svg'
import LogoMini from 'assets/images/icon--color-black.svg'

import './styles.scss'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { logoutRequest } from 'store/auth/slice'
import AvatarLoader from '../content-loader/avatar-loader'
import { useUserProfile } from 'store/user/hooks'
import AvatarWithTextLoader from '../content-loader/avatar-with-text'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const { auth } = useAuth()
	const dispatch = useDispatch()

	const handleOpenDrawer = () => {
		dispatch(enableAppDrawer())
	}

	return (
		<div className="navbar">
			<div className="navbar-wrap">
				<div className="navbar-content-right">
					<ul className="navbar-nav">
						<li className="navbar-item">
							<Button
								variant="ghost"
								color="secondary"
								to="#"
								circle
								icon
								onClick={handleOpenDrawer}
							>
								<i className="tio-menu-vs-outlined"></i>
							</Button>
						</li>
						<li className="navbar-item">
							<div className="navbar-brand">
								<Link to="/">
									<LazyLoadImage
										effect="blur"
										src={Logo}
										alt="Logo"
										className="navbar-brand-logo"
									/>
									<LazyLoadImage
										effect="blur"
										src={LogoMini}
										alt="Logo"
										className="navbar-brand-logo-mini"
									/>
								</Link>
							</div>
						</li>
					</ul>
				</div>
				<div className="navbar-content-center">
					<Search />
				</div>
				<div className="navbar-content-left">
					<ul className="navbar-nav">
						{auth && <SubscriberNav />}
						{!auth && <GuestNav />}
					</ul>
				</div>
			</div>
		</div>
	)
}

const SubscriberNav = () => {
	const dispatch = useDispatch()
	const { data: profile, loading } = useUserProfile()
	const handleLogout = () => {
		dispatch(logoutRequest())
	}

	return (
		<React.Fragment>
			<li className="navbar-item">
				<Button
					variant="ghost"
					color="secondary"
					to={ROUTES.DASHBOARD.ADD_VIDEO().link}
					circle
					icon
				>
					<i className="tio-add"></i>
				</Button>
			</li>
			<li className="navbar-item">
				<Button
					variant="ghost"
					color="secondary"
					to="#"
					status="danger"
					statusSize="sm"
					circle
					icon
				>
					<i className="tio-notifications-on-outlined"></i>
				</Button>
			</li>
			<li className="navbar-item">
				<Dropdown>
					<DropdownButton>
						<div className="navbar-avatar-wrapper">
							{profile && !loading ? (
								<Avatar
									image={profile.avatar}
									alt={profile.name}
									size="sm"
									circle
									status="success"
								/>
							) : (
								<AvatarLoader />
							)}
						</div>
					</DropdownButton>
					<DropdownMenu>
						<DropdownHeader>
							<Media>
								{profile && !loading ? (
									<React.Fragment>
										<Avatar
											image={profile.avatar}
											alt={profile.name}
											size="sm"
											circle
											className="me-2"
										/>
										<MediaBody>
											<span
												style={{ display: 'block', color: '#1e2022', marginBottom: 0 }}
											>
												{profile.name}
											</span>
											<span style={{ display: 'block', color: '#677788', margin: 0 }}>
												{profile.email}
											</span>
										</MediaBody>
									</React.Fragment>
								) : (
									<AvatarWithTextLoader />
								)}
							</Media>
						</DropdownHeader>
						<DropdownDivider />
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.OVERVIEW().link }}>
							<span className="text-truncate" title="داشبورد">
								داشبورد
							</span>
						</DropdownItem>
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.ADD_VIDEO().link }}>
							<span className="text-truncate" title="ویدئوی جدید">
								ویدئوی جدید
							</span>
						</DropdownItem>
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.VIDEOS().link }}>
							<span className="text-truncate" title="ویدیوهای من">
								ویدیوهای من
							</span>
						</DropdownItem>
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.COMMENTS().link }}>
							<span className="text-truncate" title="دیدگاه‌ها">
								دیدگاه‌ها
							</span>
						</DropdownItem>
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.CHANNELS().link }}>
							<span className="text-truncate" title="کانال‌های دنبال شده">
								کانال‌های دنبال شده
							</span>
						</DropdownItem>
						<DropdownItem to={{ pathname: ROUTES.DASHBOARD.SETTINGS().link }}>
							<span className="text-truncate" title="	تنظیمات">
								تنظیمات
							</span>
						</DropdownItem>
						<DropdownDivider />
						<DropdownItem onClick={handleLogout}>
							<span className="text-truncate" title="خروج">
								خروج
							</span>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</li>
		</React.Fragment>
	)
}
const GuestNav = () => {
	return (
		<li className="navbar-item">
			<Button to="/signin" variant="solid" color="primary" size="sm">
				حساب ‌کاربری
			</Button>
		</li>
	)
}
export default Navbar
