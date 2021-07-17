import { Redirect, Route, Switch, Router } from 'react-router-dom'
import router from './config'
import { RouteType } from './interface'
import useAccess from 'core/hooks/use-access'
import history from 'core/utils/history'
// import CustomSwitch from './custom-switch'
const RouterComponent = () => {
	const { routerAccess, pending } = useAccess()

	if (pending) return null

	return (
		<Router history={history}>
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
		</Router>
	)
}

export default RouterComponent
