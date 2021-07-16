import { lazy } from 'react'
import { RouterType } from './interface'
import { ACCESS } from './constant'
import ROUTES from './routes'

const HomeContainer = lazy(() => import('app/containers/home'))
const SignInContainer = lazy(() => import('app/containers/dashboard/pages/sign-in'))
const NotFoundContainer = lazy(() => import('app/containers/notfound'))
const DashboardContainer = lazy(() => import('app/containers/dashboard'))
const DashboardUpload = lazy(() => import('app/containers/dashboard/pages/upload'))
const DashboardOverview = lazy(() => import('app/containers/dashboard/pages/overview'))
const DashboardVideoList = lazy(() => import('app/containers/dashboard/pages/videos'))
const DashboardSettings = lazy(() => import('app/containers/dashboard/pages/settings'))
const DashboardEditVideo = lazy(() => import('app/containers/dashboard/pages/edit-video'))
const DashboardVideo = lazy(() => import('app/containers/dashboard/pages/video'))

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
				name: 'video',
				path: ROUTES.DASHBOARD.VIDEO().path,
				exact: true,
				access: ACCESS.PROTECTED,
				component: DashboardVideo
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
			},
			{
				name: 'notfound',
				path: '*',
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
	},
	{
		name: 'notfound',
		path: '*',
		exact: false,
		access: ACCESS.PUBLIC,
		component: NotFoundContainer
	}
]

export default router
