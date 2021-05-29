type Category = {
	id: string | number
	title: string
	icon: string
	to: string
}
export interface CategoryState {
	list: Array<Category>
}
