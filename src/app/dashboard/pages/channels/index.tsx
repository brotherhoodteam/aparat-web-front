import PanelLayout from 'app/templates/panel'
import { Card, CardBody, CardHeader, CardTitle } from 'components/base/card'
import NavbarTab, { NavbarTabItem, NavbarTabLink } from 'components/base/navbar-tab'
import { NavbarLink } from 'components/base/navbar-vertical'
import { RouteType } from 'core/router/interface'
import ROUTES from 'core/router/routes'
import useAccess from 'lib/hooks/use-access'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

interface DashboardChannels {
	routes: Array<RouteType>
}
const DashboradChannels: React.FC<DashboardChannels> = props => {
	const { routes } = props
	const { routerAccess } = useAccess()

	return (
		<React.Fragment>
			<PanelLayout title="دنبال کنندگان">
				<Card>
					<CardHeader>
						<CardTitle className="h5">دنبال کنندگان</CardTitle>
					</CardHeader>
					<CardBody>
						<NavbarTab>
							<NavbarTabItem>
								<NavbarTabLink slug={ROUTES.DASHBOARD.FOLLOWERS().path}>
									دنبال‌کنندگان
								</NavbarTabLink>
							</NavbarTabItem>
							<NavbarTabItem>
								<NavbarTabLink slug={ROUTES.DASHBOARD.FOLLOWING().path}>
									دنبال میکنید
								</NavbarTabLink>
							</NavbarTabItem>
						</NavbarTab>
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
							<Redirect to={ROUTES.DASHBOARD.FOLLOWERS().path} />
						</Switch>
					</CardBody>
				</Card>
			</PanelLayout>
		</React.Fragment>
		// <PanelLayout title="دنبال کنندگان">
		// 	<Card>
		// 		<CardHeader>
		// 			<CardTitle className="h5">کانال‌‌ها و دنبال کننده</CardTitle>
		// 		</CardHeader>
		// 		<CardBody></CardBody>
		// 	</Card>
		// </PanelLayout>
	)
}

export default DashboradChannels
