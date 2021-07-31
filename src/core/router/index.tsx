import { Redirect, Route, Switch } from 'react-router-dom'
import router from './config'
import { RouteType } from './interface'
import useAccess from 'lib/hooks/use-access'

const RouterComponent = () => {
	const { routerAccess, pending } = useAccess()

	if (pending) return null

	return (
		<Switch>
			{router.map(
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
