import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

import useClickOutside from 'lib/hooks/use-click-outside'
import { disableAppDrawer } from 'store/app/slice'
import { Card, CardBody, CardHeader } from 'components/base/card'
import Button from 'components/base/button'
import NavbarVertical, {
	NavbarButton,
	NavbarDivider,
	NavbarItem,
	NavbarLink,
	NavbarSubtitle
} from '../../base/navbar-vertical'
import LogoImage from 'static/images/logo--color-black--without_text.svg'
import { useCategories } from 'store/categories/hooks'
import { CategoryNormalized } from 'lib/types/category'
import { useAppDrawer } from 'store/app/hooks'
import { BaseComponent } from 'lib/types/component'
import useClassName from 'lib/hooks/use-class'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './styles.scss'

interface DrawerProps extends BaseComponent<HTMLDivElement> {}

const Drawer: React.FC<DrawerProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'drawer',
		appendClassName: className
	})

	const drewerRef = useRef<HTMLDivElement>(null)
	const [limit, setLimit] = useState({ status: true, length: 4 })
	const { data } = useCategories()
	const isOpenDrawer = useAppDrawer()
	const disaptch = useDispatch()

	const handleClose = () => {
		disaptch(disableAppDrawer())
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
		const itmes = limit.status ? data?.slice(0, limit.length) : data

		return itmes?.map((item: CategoryNormalized) => (
			<NavbarItem key={item.id}>
				<NavbarLink slug={item.slug} icon={item.icon} />
			</NavbarItem>
		))
	}
	return (
		<CSSTransition
			in={isOpenDrawer}
			timeout={200}
			classNames={{
				enterActive: 'active',
				enterDone: 'active'
			}}
			unmountOnExit
		>
			<div className={computedClassName} ref={drewerRef} {...attr}>
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
							<LazyLoadImage src={LogoImage} alt="user" effect="blur" />
						</div>
					</CardHeader>

					<CardBody className="drawer-body">
						<PerfectScrollbar style={{ width: '100%', height: '100%' }}>
							<NavbarVertical>
								<NavbarItem>
									<NavbarLink icon="tio-home-vs" slug="/dashboard">
										صفحه اصلی
									</NavbarLink>
								</NavbarItem>
								<NavbarItem>
									<NavbarLink icon="tio-dashboard-vs" slug="/dashboard">
										داشتبورد
									</NavbarLink>
								</NavbarItem>
								<NavbarDivider />
								<NavbarItem>
									<NavbarSubtitle>دسته‌بندی</NavbarSubtitle>
								</NavbarItem>
								{renderCategoies()}
								<NavbarItem>
									<NavbarButton
										icon={`${limit.status ? 'tio-chevron-down' : 'tio-chevron-up'}`}
										onClick={toggleList}
									>
										{limit.status ? 'نمایش بیشتر' : 'نمایش کمتر'}
									</NavbarButton>
								</NavbarItem>
								<NavbarItem>
									<NavbarDivider />
								</NavbarItem>
								<NavbarItem>
									<NavbarLink icon="tio-support" slug="/dashboard">
										تماس‌باما
									</NavbarLink>
								</NavbarItem>
								<NavbarItem>
									<NavbarLink icon="tio-comment-play" slug="/dashboard">
										تبلیغات
									</NavbarLink>
								</NavbarItem>
								<NavbarItem>
									<NavbarLink icon="tio-new-release" slug="/dashboard">
										قوانین
									</NavbarLink>
								</NavbarItem>
							</NavbarVertical>
						</PerfectScrollbar>
					</CardBody>
				</Card>
			</div>
		</CSSTransition>
	)
}

export default Drawer
