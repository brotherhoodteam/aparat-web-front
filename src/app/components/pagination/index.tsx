import useClass from 'lib/hooks/use-class'
import { ClassName } from 'lib/types/component'
import { useEffect, useMemo, useState } from 'react'
import './style.scss'

interface PaginationProps {
	className?: ClassName
	pageLength: number
	active: number
	onChangePage: (page: number | string) => void
}
interface PaginationItemProps {
	className?: ClassName
	page: number
	active: number
	onChangePage: (page: number | string) => void
}
interface PaginationArrowProps {
	className?: ClassName
	active: number
	pageLength: number
	state: 'prev' | 'next'
	onChangePage: (page: number | string) => void
}
const Pagination: React.FC<PaginationProps> = ({
	className,
	pageLength,
	active,
	onChangePage
}) => {
	const [state, setState] = useState<Array<number>>([])
	const styles = useClass({
		otherClass: className
	})

	useEffect(() => {
		setState(
			Array(pageLength)
				.fill('')
				.map((_, inx) => inx + 1)
		)
	}, [pageLength])

	return (
		<nav id="datatablePagination" aria-label="Activity pagination" className={styles}>
			<div className="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
				<ul id="datatable_pagination" className="pagination datatable-custom-pagination">
					<PaginationArrow
						active={active}
						onChangePage={onChangePage}
						pageLength={pageLength}
						state="prev"
					>
						قبلی
					</PaginationArrow>
					{state.map(page => (
						<PaginationItem
							page={page}
							key={page}
							active={active}
							onChangePage={onChangePage}
						/>
					))}
					<PaginationArrow
						active={active}
						onChangePage={onChangePage}
						pageLength={pageLength}
						state="next"
					>
						بعدی
					</PaginationArrow>
				</ul>
			</div>
		</nav>
	)
}
const PaginationItem: React.FC<PaginationItemProps> = ({
	className,
	page,
	active,
	onChangePage
}) => {
	const styles = useClass({
		defaultClass: 'paginate_item page-item',
		otherClass: className,
		optionalClass: {
			['active']: active == page
		}
	})

	return (
		<li className={styles}>
			<a
				className="paginate_button page-link"
				onClick={() => {
					onChangePage(page)
				}}
			>
				{page}
			</a>
		</li>
	)
}
const PaginationArrow: React.FC<PaginationArrowProps> = ({
	className,
	active,
	state,
	onChangePage,
	pageLength,
	children
}) => {
	const disbled = useMemo(
		() =>
			(state === 'prev' && active - 1 === 0) ||
			(state === 'next' && active + 1 === pageLength + 1),
		[active]
	)
	const styles = useClass({
		defaultClass: 'paginate_item page-item',
		otherClass: className,
		optionalClass: {
			['disabled']: disbled
		}
	})

	const handleChangePage = () => {
		if (disbled) return

		if (state === 'prev') {
			onChangePage(active - 1)
		}
		if (state === 'next') {
			onChangePage(active + 1)
		}
	}

	return (
		<li className={styles}>
			<a className="paginate_button page-link" onClick={handleChangePage}>
				{children}
			</a>
		</li>
	)
}

export default Pagination
