import { Redirect } from 'react-router-dom'

interface GuestRouterHOC {
	component: React.FC
	auth: boolean
	redirectPath: string
}

const withGuestRoute = ({ component: Component, auth, redirectPath }: GuestRouterHOC) => {
	return function WithGuestRoute(props: any) {
		return auth ? (
			<Redirect to={{ pathname: `/${redirectPath}` }} />
		) : (
			<Component {...props} />
		)
	}
}

export default withGuestRoute
