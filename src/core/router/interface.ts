import { Access } from './constant'

export type ComponnetType = { routes?: Array<RouteType> }
export interface RouteType {
	name: string
	path: string
	exact: boolean
	access: Access
	component: React.FC<any> | React.LazyExoticComponent<React.FC<any>>
	routes?: Array<RouteType>
}
export type RouterType = Array<RouteType>
