import { lazy } from 'react'
import { RouterType } from '../config/router/interface'
import { Access } from '../config/router/router.config'

const HomeContainer = lazy(() => import('../resources/containers/home'))
const PanelContainer = lazy(() => import('../resources/containers/panel'))
const NotFoundContainer = lazy(() => import('../resources/containers/notfound'))
const PanelEditPage = lazy(() => import('../resources/pages/panel/edit'))

const appRouter: RouterType = [
	{
		name: 'home',
		path: '/',
		exact: true,
		access: Access.PUBLIC,
		component: HomeContainer
	},
	{
		name: 'panel',
		path: '/panel',
		exact: false,
		access: Access.PROTECTED,
		component: PanelContainer,
		routes: [
			{
				name: 'edit',
				path: '/panel/edit',
				exact: false,
				access: Access.PROTECTED,
				component: PanelEditPage
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

export default appRouter
