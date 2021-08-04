import { BaseEntity } from './base'

export interface BaseCategory {
	title: string
	icon?: string
	banner?: string
	slug: string
}
export interface Category extends BaseEntity, BaseCategory {}
export interface CategoryNormalized {
	id: number
	userId?: string
	label: string
	value: string
	icon?: string
	banner?: string
	slug: string
}
