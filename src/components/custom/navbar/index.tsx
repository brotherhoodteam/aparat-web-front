import React from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDispatch } from 'react-redux'
import Button from 'components/base/button'
import Search from 'components/custom/search'
import { enableAppDrawer } from 'store/app/slice'
import useAuth from 'store/auth/hooks'
import Logo from 'static/images/logo--color-black--without_text.svg'
import LogoMini from 'static/images/icon--color-black.svg'
import { BaseComponent } from 'lib/types/component'
import useClassName from 'lib/hooks/use-class'
import ProfileMenu from './profile-menu'
import Menu from './menu'
import './styles.scss'

interface NavbarProps extends BaseComponent<HTMLDivElement> {}

const Navbar: React.FC<NavbarProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'navbar',
		optionalClass: className
	})

	const { auth } = useAuth()
	const dispatch = useDispatch()

	const handleOpenDrawer = () => {
		dispatch(enableAppDrawer())
	}

	return (
		<div className={computedClassName} {...attr}>
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
					{auth && <ProfileMenu />}
					{!auth && <Menu />}
				</div>
			</div>
		</div>
	)
}

export default Navbar
