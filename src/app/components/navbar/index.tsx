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
import Media from 'app/components/media'
import Button from 'app/elements/button'
import Search from 'app/components/search'
import ROUTES from 'config/router/routes'

import { enableAppDrawer } from 'store/app/slice'
import useAuth from 'store/auth/hooks'

import Logo from 'assets/images/logo--color-black--without_text.svg'
import LogoMini from 'assets/images/icon--color-black.svg'
import ProfileImg from 'assets/images/img6.jpg'

import './styles.scss'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { logoutRequest } from 'store/auth/slice'

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
							<Avatar
								image={ProfileImg}
								alt="profile"
								size="sm"
								circle
								status="success"
							/>
						</div>
					</DropdownButton>
					<DropdownMenu>
						<DropdownHeader>
							<Media
								image={ProfileImg}
								alt="آرش میلانی"
								title="آرش میلانی"
								desc="arash@example.com"
							/>
						</DropdownHeader>
						<DropdownDivider />
						<DropdownItem to="/dashboard/profile">
							<span className="text-truncate" title="داشبورد">
								داشبورد
							</span>
						</DropdownItem>
						<DropdownItem to="/dashboard/profile">
							<span className="text-truncate" title="شروع پخش زنده">
								شروع پخش زنده
							</span>
						</DropdownItem>
						<DropdownItem to="#">
							<span className="text-truncate" title="ویدئو‌های من">
								ویدئو‌های من
							</span>
						</DropdownItem>
						<DropdownItem to="#">
							<span className="text-truncate" title="دیدگاه">
								دیدگاه
							</span>
						</DropdownItem>
						<DropdownItem to="#">
							<span className="text-truncate" title="کانالهای دنبال شده">
								کانالهای دنبال شده
							</span>
						</DropdownItem>
						<DropdownItem to="#">
							<span className="text-truncate" title="آمار بازدید">
								آمار بازدید
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
