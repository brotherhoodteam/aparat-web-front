import { Route } from 'react-router-dom'
import { RouteType } from '../types'

interface PropType extends RouteType {}

const RouteWithSubRoutes: React.FC<PropType> = route => {
	console.log('RouteWithSubRoutes renderd')

	const { component: Component, ...otherPorps } = route
	return (
		<Route
			{...otherPorps}
			render={props => {
				return <Component key={route.name} {...props} routes={route.routes} />
			}}
		/>
	)
}

export default RouteWithSubRoutes
