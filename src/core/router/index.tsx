import { Redirect, Route, Switch } from 'react-router'
import router from './config'
import { RouteType } from './interface'
import useAccess from 'core/hooks/use-access'

const RouterComponent = () => {
	const { routerAccess } = useAccess()
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
