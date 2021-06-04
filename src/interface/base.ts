export interface BaseEntity {
	id: number
	user_id?: string
	created_at: string
	updated_at: string
	deleted_at: string | null
}

export type ErrorType = {
	message: string
	status: number | string
}
