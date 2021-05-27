import { Redirect, Route, Switch } from 'react-router'
import routes from './routes'
import { RouteType } from './interface'
import useAccess from '../../hooks/use-access'

const RouterComponent = () => {
	const { routerAccess } = useAccess()
	return (
		<Switch>
			{routes.map(
				({ access, component: Component, name, path, exact, routes }: RouteType) => {
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
	)
}

export default RouterComponent

// {routes.map((route: RouteType) => {
// 	console.log('route', route)
// 	switch (route.access) {
// 		case Access.PUBLIC: {
// 			return <RouteWithSubRoutes key={route.name} {...route} />
// 		}
// 		case Access.GUEST: {
// 			const Component = withGuestRoute({
// 				component: route.component,
// 				auth: isLoggedIn,
// 				redirectPath: guestRedirectPath
// 			})
// 			return (
// 				<RouteWithSubRoutes key={route.name} {...route} component={Component} />
// 			)
// 		}
// 		case Access.PROTECTED: {
// 			const Component = withProtectedRoute({
// 				component: route.component,
// 				auth: isLoggedIn,
// 				redirectPath: protectedRedirectPath
// 			})
// 			return (
// 				<RouteWithSubRoutes key={route.name} {...route} component={Component} />
// 			)
// 		}

// 		default: {
// 			return <Redirect to="/" />
// 		}
// 	}
// })}
