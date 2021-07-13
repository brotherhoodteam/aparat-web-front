import { lazy } from 'react'
import { RouterType } from './interface'
import { ACCESS } from './constant'
import ROUTES from './routes'

const HomeContainer = lazy(() => import('resources/containers/home'))
const SignInContainer = lazy(() => import('resources/containers/sign-in'))
const NotFoundContainer = lazy(() => import('resources/containers/notfound'))
const DashboardContainer = lazy(() => import('resources/containers/dashboard'))
const DashboardUpload = lazy(() => import('resources/pages/dashboard/upload'))
const DashboardOverview = lazy(() => import('resources/pages/dashboard/overview'))
const DashboardVideoList = lazy(() => import('resources/pages/dashboard/myvideos'))
const DashboardSettings = lazy(() => import('resources/pages/dashboard/settings'))
const DashboardEditVideo = lazy(() => import('resources/pages/dashboard/edit-video'))

const router: RouterType = [
	{
		name: 'home',
		path: ROUTES.MAIN.HOME().path,
		exact: true,
		access: ACCESS.GUEST,
		component: HomeContainer
	},
	{
		name: 'signin',
		path: ROUTES.AUTH.SIGNIN().path,
		exact: true,
		access: ACCESS.GUEST,
		component: SignInContainer
	},
	{
		name: 'dashboard',
		path: ROUTES.DASHBOARD.OVERVIEW().path,
		exact: false,
		access: ACCESS.PROTECTED,
		component: DashboardContainer,
		routes: [
			{
				name: 'overview',
				path: ROUTES.DASHBOARD.OVERVIEW().path,
				exact: true,
				access: ACCESS.PROTECTED,
				component: DashboardOverview
			},
			{
				name: 'add',
				path: ROUTES.DASHBOARD.ADD_VIDEO().path,
				exact: true,
				access: ACCESS.PROTECTED,
				component: DashboardUpload
			},
			{
				name: 'edit',
				path: ROUTES.DASHBOARD.EDIT_VIDEO().path,
				exact: true,
				access: ACCESS.PROTECTED,
				component: DashboardEditVideo
			},
			{
				name: 'myvideos',
				path: ROUTES.DASHBOARD.VIDEOS().path,
				exact: true,
				access: ACCESS.PROTECTED,
				component: DashboardVideoList
			},
			{
				name: 'setting',
				path: ROUTES.DASHBOARD.SETTINGS().path,
				exact: true,
				access: ACCESS.PROTECTED,
				component: DashboardSettings
			},
			{
				name: 'notfound',
				path: ROUTES.MAIN.NOTFOUND().path,
				exact: false,
				access: ACCESS.PUBLIC,
				component: NotFoundContainer
			}
		]
	},

	{
		name: 'notfound',
		path: ROUTES.MAIN.NOTFOUND().path,
		exact: false,
		access: ACCESS.PUBLIC,
		component: NotFoundContainer
	}
]

export default router
