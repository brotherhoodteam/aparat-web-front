import { Redirect, Route, Switch } from 'react-router'

import Sidebar from '../../components/sidebar'
import Button from '../../elements/button'

import useAccess from '../../../hooks/use-access'
import { RouteType } from '../../../core/router/types'

import accountBg from '../../../assets/images/abstract-shapes-20.svg'
import './styles.scss'

interface DashboardProps {
	routes: Array<RouteType>
}
const DashboardContainer: React.FC<DashboardProps> = ({ routes }) => {
	const { routerAccess } = useAccess()
	const handleLogout = () => {
		console.log('logout')
	}
	return (
		<>
			<div className="dashboard">
				<div className="bg-dark" style={{ backgroundImage: `url(${accountBg})` }}>
					<div className="container space-1 space-top-lg-2 space-bottom-lg-3">
						<div className="row align-items-center">
							<div className="col">
								<div className="d-none d-lg-block">
									<h1 className="h2 text-white">حساب کاربری</h1>
								</div>
							</div>
							<div className="col-auto">
								<Button variant="soft" color="light" onClick={handleLogout}>
									خروج از حساب ‌کاربری
								</Button>
							</div>
						</div>
					</div>
				</div>
				<div className="container space-1 space-top-lg-0 space-bottom-lg-2 mt-lg-n10">
					<div className="row">
						<div className="col-lg-3">
							<Sidebar />
						</div>
						<div className="col-9">
							<Switch>
								{routes?.map(
									({
										exact,
										path,
										routes,
										name,
										component: Component,
										access
									}: RouteType) => {
										return (
											<Route
												exact={exact}
												key={name}
												path={path}
												render={props => {
													const { status, redirect } = routerAccess(access)
													if (status) {
														return <Component routes={routes} {...props} />
													}
													return <Redirect to={redirect} />
												}}
											/>
										)
									}
								)}
							</Switch>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DashboardContainer
