import { Channel } from './channel'

export interface User {
	id: number
	mobile: string
	email: string
	name: string
	type: string
	avatar: string
	website: string
	verified_at: string
	created_at: string
	updated_at: string
	deleted_at: null
	channel: Channel
}
