import { lazy } from 'react'
import { RouterType } from './interface'
import { Access } from './constant'
import Routes from './routes'

const HomeContainer = lazy(() => import('../../resources/containers/home'))
const SignInContainer = lazy(() => import('../../resources/containers/sign-in'))
const NotFoundContainer = lazy(() => import('../../resources/containers/notfound'))
const DashboardContainer = lazy(() => import('../../resources/containers/dashboard'))
const DashboardUpload = lazy(() => import('../../resources/pages/dashboard/upload'))
const DashboardOverview = lazy(() => import('../../resources/pages/dashboard/overview'))
const DashboardMyVideos = lazy(() => import('../../resources/pages/dashboard/myvideos'))
const DashboardSettings = lazy(() => import('../../resources/pages/dashboard/settings'))

const router: RouterType = [
	{
		name: 'home',
		path: Routes.HOME,
		exact: true,
		access: Access.GUEST,
		component: HomeContainer
	},
	{
		name: 'signin',
		path: Routes.SIGNIN,
		exact: true,
		access: Access.GUEST,
		component: SignInContainer
	},
	{
		name: 'dashboard',
		path: Routes.DASHBOARD,
		exact: false,
		access: Access.PROTECTED,
		component: DashboardContainer,
		routes: [
			{
				name: 'overview',
				path: Routes.DASHBOARD,
				exact: true,
				access: Access.PROTECTED,
				component: DashboardOverview
			},
			{
				name: 'upload',
				path: Routes.DASHBOARD_UPLOAD,
				exact: true,
				access: Access.PROTECTED,
				component: DashboardUpload
			},
			{
				name: 'myvideos',
				path: Routes.DASHBOARD_MYVIDEOS,
				exact: true,
				access: Access.PROTECTED,
				component: DashboardMyVideos
			},
			{
				name: 'setting',
				path: Routes.DASHBOARD_SETTINGS,
				exact: true,
				access: Access.PROTECTED,
				component: DashboardSettings
			}
		]
	},

	{
		name: 'notfound',
		path: Routes.NOTFOUND,
		exact: false,
		access: Access.PUBLIC,
		component: NotFoundContainer
	}
]

export default router
