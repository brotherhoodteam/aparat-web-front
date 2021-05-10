import { Access } from './router.config'

export type ComponnetType = { routes?: Array<RouteType> }
export interface RouteType {
	name: string
	path: string
	exact: boolean
	access: Access
	component: React.FC<ComponnetType>
	routes?: Array<RouteType>
}
export type RouterType = Array<RouteType>
