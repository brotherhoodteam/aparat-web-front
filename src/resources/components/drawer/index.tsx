import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import useClickOutside from '../../../hooks/use-click-outside'

import { selectAppDrawer } from '../../../store/app/selectors'
import { closeAppDrawer } from '../../../store/app/slice'
import { Card, CardBody, CardHeader } from '../../elements/card'
import Button from '../../elements/button'
import LogoImage from '../../../assets/images/logo--color-black--without_text.svg'

import './styles.scss'
import {
	NavbarDivider,
	NavbarLink,
	NavbarSubtitle,
	NavbarVertical
} from '../navbar-vertical'

const Drawer = () => {
	const isOpenDrawer = useSelector(selectAppDrawer)
	const disaptch = useDispatch()
	const drewerRef = useRef<HTMLDivElement>(null)

	const handleClose = () => {
		disaptch(closeAppDrawer())
	}
	useClickOutside(drewerRef, handleClose)
	return (
		<CSSTransition
			in={isOpenDrawer}
			timeout={300}
			classNames={{
				enter: 'hidden',
				enterActive: 'active',
				enterDone: 'active',
				exit: 'active',
				exitActive: 'hidden',
				exitDone: 'hidden'
			}}
			unmountOnExit
		>
			<div className="drawer" ref={drewerRef}>
				<Card size="lg" className="drawer-card">
					<CardHeader>
						<Button
							as="a"
							size="xs"
							variant="ghost"
							color="dark"
							href="#"
							icon
							onClick={handleClose}
						>
							<i className="tio-clear tio-lg"></i>
						</Button>
						<div className="drawer-logo">
							<img src={LogoImage} alt="" />
						</div>
					</CardHeader>
					<CardBody className="drawer-body">
						<NavbarVertical>
							<NavbarLink title="صفحه اصلی" icon="tio-home-vs" to="/dashboard" />
							<NavbarDivider />
							<NavbarSubtitle title="دسته‌بندی" />
							<NavbarLink title="صفحه اصلی" icon="tio-home-vs" to="/dashboard" />
							<NavbarLink
								title="سریال و فیلم‌های سینمایی"
								icon="tio-movie"
								to="/dashboard"
							/>
							<NavbarLink title="گیم" icon="tio-joystick" to="/dashboard" />
							<NavbarLink title="ورزشی" icon="tio-sport" to="/dashboard" />
							<NavbarLink title="کارتون" icon="tio-face-male" to="/dashboard" />
							<NavbarLink title="نمایش بیشتر" icon="tio-chevron-down" to="/dashboard" />
							<NavbarDivider />
							<NavbarLink title="تماس‌باما" icon="tio-support" to="/dashboard" />
							<NavbarLink title="تبلیغات" icon="tio-comment-play" to="/dashboard" />
							<NavbarLink title="قوانین" icon="tio-new-release" to="/dashboard" />
						</NavbarVertical>
					</CardBody>
				</Card>
			</div>
		</CSSTransition>
	)
}

export default Drawer
