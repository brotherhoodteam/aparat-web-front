import { Redirect, Switch } from 'react-router'
import routes from '../../../routes'
import { Access } from '../config'
import { RouteType } from '../types'
import RouteWithSubRoutes from './route-with-sub-routes'
import withGuestRoute from '../hoc/with-guest-route'
import withProtectedRoute from '../hoc/with-protected-route'
import useAuth from '../../../hooks/use-auth'

const RouterComponent = () => {
	const isLoggedIn = useAuth(true)
	console.log(' isLoggedIn', isLoggedIn)
	const guestRedirectPath = process.env.REACT_APP_GUEST_REDIRECT_PATH || '/'
	const protectedRedirectPath = process.env.REACT_APP_PROTECTED_REDIRECT_PATH || '/'

	return (
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
							redirectPath: guestRedirectPath
						})
						return (
							<RouteWithSubRoutes key={route.name} {...route} component={Component} />
						)
					}
					case Access.PROTECTED: {
						const Component = withProtectedRoute({
							component: route.component,
							auth: isLoggedIn,
							redirectPath: protectedRedirectPath
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
	)
}

export default RouterComponent
