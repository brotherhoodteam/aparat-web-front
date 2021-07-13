import { useDispatch } from 'react-redux'

import {
	Dropdown,
	DropdownButton,
	DropdownDivider,
	DropdownHeader,
	DropdownItem,
	DropdownMenu
} from '../dropdown'
import Avatar from '../../elements/avatar'
import Media from '../media'
import Button from '../../elements/button'
import Search from '../search'
import ROUTES from '../../../core/router/routes'

import { enableAppDrawerAction } from '../../../store/app/slice'
import useAuth from '../../../hooks/use-auth'

import Logo from '../../../assets/images/logo--color-black--without_text.svg'
import LogoMini from '../../../assets/images/icon--color-black.svg'
import ProfileImg from '../../../assets/images/img6.jpg'

import './styles.scss'

const Navbar = () => {
	const isLoggedIn = useAuth()
	const dispatch = useDispatch()
	const handleOpenDrawer = () => {
		dispatch(enableAppDrawerAction())
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
								<img src={Logo} alt="Logo" className="navbar-brand-logo" />
								<img src={LogoMini} alt="Logo" className="navbar-brand-logo-mini" />
							</div>
						</li>
					</ul>
				</div>
				<div className="navbar-content-center">
					<Search />
				</div>
				<div className="navbar-content-left">
					<ul className="navbar-nav">
						{isLoggedIn && <SubscriberNav />}
						{!isLoggedIn && <GuestNav />}
					</ul>
				</div>
			</div>
		</div>
	)
}

const SubscriberNav = () => {
	return (
		<>
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
						<DropdownItem to="#">
							<span className="text-truncate" title="خروج">
								خروج
							</span>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</li>
		</>
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
