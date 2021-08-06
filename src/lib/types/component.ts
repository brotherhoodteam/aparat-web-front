export type Colors =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark'
	| 'white'

export type Variants = 'solid' | 'outline' | 'soft' | 'ghost' | 'link'
export type ClassName = string
export type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type LinkTarget = string

export interface BaseComponent<T> extends React.HTMLAttributes<T> {}
