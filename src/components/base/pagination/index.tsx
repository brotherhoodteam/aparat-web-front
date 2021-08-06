import { BaseComponent } from 'lib/types/component'
import { useEffect, useState } from 'react'
import PaginationArrow from './arrow'
import PaginationItem from './item'
import './style.scss'

interface PaginationProps extends BaseComponent<HTMLElement> {
	pageLength: number
	active: number
	onChangePage: (page: number | string) => void
}

const Pagination: React.FC<PaginationProps> = props => {
	const { children, className, pageLength, active, onChangePage, ...attr } = props

	const [state, setState] = useState<Array<number>>([])

	useEffect(() => {
		setState(
			Array(pageLength)
				.fill('')
				.map((_, inx) => inx + 1)
		)
	}, [pageLength])

	return (
		<nav className={className} {...attr}>
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

export default Pagination
