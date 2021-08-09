import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import router from './config'
import { RouteType } from './interface'
import useAccess from 'lib/hooks/use-access'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import TopBarProgress from 'components/custom/top-bar-progress'

import './styles.scss'
import { LoadingBar } from 'react-redux-loading-bar'

const RouterComponent = () => {
	const [isLoading, setIsLoading] = useState(false)
	const { routerAccess, pending } = useAccess()
	const location = useLocation()

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		scrollToTop()
	}, [location.pathname])

	if (pending) return null

	return (
		<React.Fragment>
			<LoadingBar />

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
		</React.Fragment>
	)
}

export default RouterComponent
