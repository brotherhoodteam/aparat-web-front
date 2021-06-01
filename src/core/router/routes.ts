import { lazy } from 'react'
import { RouterType } from './interface'
import { Access } from './config'

const HomeContainer = lazy(() => import('../../resources/containers/home'))
const SignInContainer = lazy(() => import('../../resources/containers/sign-in'))
const NotFoundContainer = lazy(() => import('../../resources/containers/notfound'))
const DashboardContainer = lazy(() => import('../../resources/containers/dashboard'))
const DashboardUpload = lazy(() => import('../../resources/pages/dashboard/upload'))
const DashboardOverview = lazy(() => import('../../resources/pages/dashboard/overview'))
const DashboardSettings = lazy(() => import('../../resources/pages/dashboard/settings'))

const router: RouterType = [
	{
		name: 'home',
		path: '/',
		exact: true,
		access: Access.GUEST,
		component: HomeContainer
	},
	{
		name: 'signin',
		path: '/signin',
		exact: true,
		access: Access.GUEST,
		component: SignInContainer
	},
	{
		name: 'dashboard',
		path: '/dashboard',
		exact: false,
		access: Access.PROTECTED,
		component: DashboardContainer,
		routes: [
			{
				name: 'overview',
				path: '/dashboard',
				exact: true,
				access: Access.PROTECTED,
				component: DashboardOverview
			},
			{
				name: 'upload',
				path: '/dashboard/upload',
				exact: true,
				access: Access.PROTECTED,
				component: DashboardUpload
			},
			{
				name: 'setting',
				path: '/dashboard/settings',
				exact: true,
				access: Access.PROTECTED,
				component: DashboardSettings
			}
		]
	},

	{
		name: 'notfound',
		path: '*',
		exact: false,
		access: Access.PUBLIC,
		component: NotFoundContainer
	}
]

export default router
