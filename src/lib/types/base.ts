export interface BaseEntity {
	id: number
	user_id?: string
	created_at: string
	updated_at: string
	deleted_at: string | null
}

export interface Pagination {
	current_page: number
	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	next_page_url: null
	path: string
	per_page: number
	prev_page_url: number | null
	to: number
	total: number
}
