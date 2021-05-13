import { lazy } from 'react'
import { RouterType } from '../core/router/types'
import { Access } from '../core/router/config'
// import HomeContainer from '../resources/containers/home'
// import SignInContainer from '../resources/containers/sign-in'
// import NotFoundContainer from '../resources/containers/notfound'

const HomeContainer = lazy(() => import('../resources/containers/home'))
const SignInContainer = lazy(() => import('../resources/containers/sign-in'))
const NotFoundContainer = lazy(() => import('../resources/containers/notfound'))

const router: RouterType = [
	{
		name: 'home',
		path: '/',
		exact: true,
		access: Access.PUBLIC,
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
		name: 'notfound',
		path: '*',
		exact: false,
		access: Access.PUBLIC,
		component: NotFoundContainer
	}
]

export default router
