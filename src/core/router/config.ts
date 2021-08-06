import { lazy } from 'react'
import { RouterType } from './interface'
import { ACCESS } from './constant'
import ROUTES from './routes'

const HomeContainer = lazy(() => import('app/pages/home'))
const SignInContainer = lazy(() => import('app/auth/sign-in'))
const NotFoundContainer = lazy(() => import('app/specialty/error-404'))
const SinglePostContainer = lazy(() => import('app/pages/single-post'))
const DashboardContainer = lazy(() => import('app/dashboard'))
const DashboardOverview = lazy(() => import('app/dashboard/pages/overview'))
const DashboardVideoPublish = lazy(() => import('app/dashboard/pages/post-publish'))
const DashboardPostList = lazy(() => import('app/dashboard/pages/post-list'))
const DashboardPostInfo = lazy(() => import('app/dashboard/pages/post-info'))
const DashboardPostEdit = lazy(() => import('app/dashboard/pages/post-edit'))
const DashboardSettings = lazy(() => import('app/dashboard/pages/settings'))

const router: RouterType = [
	{
		name: 'home',
		path: ROUTES.MAIN.HOME().path,
		exact: true,
		access: ACCESS.PUBLIC,
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
		name: 'single-video',
		path: ROUTES.VIDEO.SINGLE().path,
		exact: true,
		access: ACCESS.PUBLIC,
		component: SinglePostContainer
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
				component: DashboardVideoPublish
			},
			{
				name: 'video',
				path: ROUTES.DASHBOARD.VIDEO().path,
				exact: true,
				access: ACCESS.PROTECTED,
				component: DashboardPostInfo
			},
			{
				name: 'edit',
				path: ROUTES.DASHBOARD.EDIT_VIDEO().path,
				exact: true,
				access: ACCESS.PROTECTED,
				component: DashboardPostEdit
			},
			{
				name: 'myvideos',
				path: ROUTES.DASHBOARD.VIDEOS().path,
				exact: true,
				access: ACCESS.PROTECTED,
				component: DashboardPostList
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
