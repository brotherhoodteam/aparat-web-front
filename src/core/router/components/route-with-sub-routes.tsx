import { Route } from 'react-router-dom'
import { RouteType } from '../types'

interface PropType extends RouteType {}

const RouteWithSubRoutes: React.FC<PropType> = route => {
	return (
		<Route
			{...route}
			render={props => {
				return (
					<route.component
						key={route.name}
						{...props}
						routes={route.routes}
					></route.component>
				)
			}}
		/>
	)
}

export default RouteWithSubRoutes
