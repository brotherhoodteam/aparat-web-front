import { BaseEntity } from './base'

export interface Playlist extends BaseEntity {
	title: string
	size: number
}
export interface PlaylistNormalized {
	id: number
	userId?: string
	label: string
	value: number
}
