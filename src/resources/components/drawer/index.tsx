import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import PerfectScrollbar from 'react-perfect-scrollbar'

import useClickOutside from '../../../hooks/use-click-outside'

import { selectAppDrawer } from '../../../store/app/selectors'
import { closeAppDrawerAction } from '../../../store/app/slice'

import { Card, CardBody, CardHeader } from '../../elements/card'
import Button from '../../elements/button'
import {
	NavbarButton,
	NavbarDivider,
	NavbarLink,
	NavbarSubtitle,
	NavbarVertical
} from '../navbar-vertical'

import LogoImage from '../../../assets/images/logo--color-black--without_text.svg'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './styles.scss'
import { selectCategoriesData } from '../../../store/categories/selectors'
import { CategoryNormalizedType } from '../../../store/categories/interface'

const Drawer = () => {
	const drewerRef = useRef<HTMLDivElement>(null)
	const [limit, setLimit] = useState({ status: true, length: 4 })
	const categoroies = useSelector(selectCategoriesData)
	const isOpenDrawer = useSelector(selectAppDrawer)
	const disaptch = useDispatch()

	const handleClose = () => {
		disaptch(closeAppDrawerAction())
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
		const itmes = limit.status ? categoroies?.slice(0, limit.length) : categoroies

		return itmes?.map((item: CategoryNormalizedType) => (
			<NavbarLink key={item.id} {...item} />
		))
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
							variant="ghost"
							color="dark"
							size="xs"
							to="#"
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
								<NavbarLink label="صفحه اصلی" icon="tio-home-vs" slug="/dashboard" />
								<NavbarLink label="داشتبورد" icon="tio-dashboard-vs" slug="/dashboard" />
								<NavbarDivider />
								<NavbarSubtitle label="دسته‌بندی" />
								{renderCategoies()}
								<NavbarButton
									label={`${limit.status ? 'نمایش بیشتر' : 'نمایش کمتر'}`}
									icon={`${limit.status ? 'tio-chevron-down' : 'tio-chevron-up'}`}
									onClick={toggleList}
								/>
								<NavbarDivider />
								<NavbarLink label="تماس‌باما" icon="tio-support" slug="/dashboard" />
								<NavbarLink label="تبلیغات" icon="tio-comment-play" slug="/dashboard" />
								<NavbarLink label="قوانین" icon="tio-new-release" slug="/dashboard" />
							</NavbarVertical>
						</PerfectScrollbar>
					</CardBody>
				</Card>
			</div>
		</CSSTransition>
	)
}

export default Drawer
