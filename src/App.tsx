import React from 'react'
import { Redirect, Switch } from 'react-router'
import RouteWithSubRoutes from './config/router/route-with-sub-routes'
import appRouter from './routes/app.router'
import { RouteType } from './config/router/interface'
import { Access } from './config/router/router.config'
import withGuestRoute from './config/router/with-guest-route.hoc'
import withProtectedRoute from './config/router/with-protected-route.hoc'

const App: React.FC = () => {
	const isLoggedIn = false

	return (
		<Switch>
			{appRouter.map((route: RouteType) => {
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
	)
}

export default App
