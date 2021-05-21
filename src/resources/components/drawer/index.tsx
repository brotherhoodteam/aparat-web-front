import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import PerfectScrollbar from 'react-perfect-scrollbar'

import useClickOutside from '../../../hooks/use-click-outside'

import { selectAppDrawer } from '../../../store/app/selectors'
import { closeAppDrawer } from '../../../store/app/slice'
import { Card, CardBody, CardHeader } from '../../elements/card'
import Button from '../../elements/button'
import LogoImage from '../../../assets/images/logo--color-black--without_text.svg'

import 'react-perfect-scrollbar/dist/css/styles.css'
import './styles.scss'
import {
	NavbarButton,
	NavbarDivider,
	NavbarLink,
	NavbarSubtitle,
	NavbarVertical
} from '../navbar-vertical'

const Drawer = () => {
	const drewerRef = useRef<HTMLDivElement>(null)
	const [limit, setLimit] = useState({ status: true, length: 4 })
	const [categories] = useState([
		{
			id: 1,
			title: 'سریال و فیلم‌های سینمایی',
			icon: 'tio-movie',
			to: '/dashboard'
		},
		{
			id: 2,
			title: 'گیم',
			icon: 'tio-joystick ',
			to: '/dashboard'
		},
		{
			id: 3,
			title: 'ورزشی',
			icon: 'tio-sport ',
			to: '/dashboard'
		},
		{
			id: 4,
			title: 'کارتون',
			icon: 'tio-face-male ',
			to: '/dashboard'
		},
		{
			id: 5,
			title: 'آشپزی',
			icon: 'tio-meal ',
			to: '/dashboard'
		},
		{
			id: 6,
			title: 'آموزشی',
			icon: 'tio-education ',
			to: '/dashboard'
		},
		{
			id: 7,
			title: 'موسیقی',
			icon: 'tio-music ',
			to: '/dashboard'
		},
		{
			id: 8,
			title: 'حیوانات',
			icon: 'tio-pet ',
			to: '/dashboard'
		},
		{
			id: 9,
			title: 'علم و تکنولوژی',
			icon: 'tio-augmented-reality ',
			to: '/dashboard'
		},
		{
			id: 10,
			title: 'خبری',
			icon: 'tio-feed ',
			to: '/dashboard'
		}
	])
	const isOpenDrawer = useSelector(selectAppDrawer)
	const disaptch = useDispatch()

	const handleClose = () => {
		disaptch(closeAppDrawer())
		setTimeout(() => {
			setLimit(prevState => ({ ...prevState, status: true }))
		}, 300)
	}
	useClickOutside(drewerRef, handleClose)
	const toggleList = () => {
		setLimit(prevState => ({
			...prevState,
			status: !prevState.status
		}))
	}
	const renderCategoies = () => {
		const itmes = limit.status ? categories.slice(0, limit.length) : categories

		return itmes.map(item => <NavbarLink key={item.id} {...item} />)
	}
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
						<PerfectScrollbar style={{ width: '100%', height: '100%' }}>
							<NavbarVertical>
								<NavbarLink title="صفحه اصلی" icon="tio-home-vs" to="/dashboard" />
								<NavbarDivider />
								<NavbarSubtitle title="دسته‌بندی" />
								{renderCategoies()}
								<NavbarButton
									title={`${limit.status ? 'نمایش بیشتر' : 'نمایش کمتر'}`}
									icon={`${limit.status ? 'tio-chevron-down' : 'tio-chevron-up'}`}
									onClick={toggleList}
								/>
								<NavbarDivider />
								<NavbarLink title="تماس‌باما" icon="tio-support" to="/dashboard" />
								<NavbarLink title="تبلیغات" icon="tio-comment-play" to="/dashboard" />
								<NavbarLink title="قوانین" icon="tio-new-release" to="/dashboard" />
							</NavbarVertical>
						</PerfectScrollbar>
					</CardBody>
				</Card>
			</div>
		</CSSTransition>
	)
}

export default Drawer
