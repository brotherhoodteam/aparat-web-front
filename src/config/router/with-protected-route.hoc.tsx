import { Redirect } from 'react-router-dom'

interface GuestRouterHOC {
	component: React.FC
	auth: boolean
	redirectPath: string
}

const withProtectedRoute = ({
	component: Component,
	auth,
	redirectPath
}: GuestRouterHOC) => {
	return function WithPortectedRoute(props: any) {
		return auth ? (
			<Component />
		) : (
			<Redirect
				to={{
					pathname: `${redirectPath}`,
					state: {
						from: props.location
					}
				}}
			/>
		)
	}
}

export default withProtectedRoute
