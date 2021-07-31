import { ACCESS } from './constant'

export type ComponnetType = { routes?: Array<RouteType> }
export interface RouteType {
	name: string
	path: string
	exact: boolean
	access: ACCESS
	component: React.FC<any> | React.LazyExoticComponent<React.FC<any>>
	routes?: Array<RouteType>
}
export type RouterType = Array<RouteType>
