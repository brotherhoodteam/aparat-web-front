import { Redirect, Switch } from 'react-router'
import routes from '../../../routes'
import { Access } from '../config'
import { RouteType } from '../types'
import RouteWithSubRoutes from './route-with-sub-routes'
import withGuestRoute from '../hoc/with-guest-route'
import withProtectedRoute from '../hoc/with-protected-route'
import { BrowserRouter } from 'react-router-dom'

const RouterComponent = () => {
	const isLoggedIn = false

	return (
		<BrowserRouter>
			<Switch>
				{routes.map((route: RouteType) => {
					switch (route.access) {
						case Access.PUBLIC: {
							return <RouteWithSubRoutes key={route.name} {...route} />
						}
						case Access.GUEST: {
							const Component = withGuestRoute({
								component: route.component,
								auth: isLoggedIn,
								redirectPath: '/'
							})
							return (
								<RouteWithSubRoutes key={route.name} {...route} component={Component} />
							)
						}
						case Access.PROTECTED: {
							const Component = withProtectedRoute({
								component: route.component,
								auth: isLoggedIn,
								redirectPath: '/'
							})
							return (
								<RouteWithSubRoutes key={route.name} {...route} component={Component} />
							)
						}

						default: {
							return <Redirect to="/" />
						}
					}
				})}
			</Switch>
		</BrowserRouter>
	)
}

export default RouterComponent
