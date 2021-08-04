import { Tag } from './tag'
import { User } from './user'

export interface Video {
	user: User
	title: string
	user_id: number
	category_id: number | null
	channel_category_id: number | null
	slug: string
	info: string
	duration: number
	banner: string
	enable_comments: boolean
	publish_at: string | null
	state: string
	updated_at: string
	created_at: string
	id: number
	likeCount: number
	age: number
	link: string
	banner_link: string
	views: number
	tags: Array<Tag>
}

export interface VideoUpdate {
	user?: User
	title?: string
	user_id?: number
	category_id?: number | null
	channel_category_id?: number | null
	slug?: string
	info?: string
	duration?: number
	banner?: string
	enable_comments?: boolean
	publish_at?: string | null
	state?: string
	updated_at?: string
	created_at?: string
	id?: number
	likeCount?: number
	age?: number
	link?: string
	banner_link?: string
	views?: number
	tags?: Array<Tag>
}
