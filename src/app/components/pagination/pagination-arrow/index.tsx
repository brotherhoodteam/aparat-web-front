import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

interface PaginationArrowProps extends BaseComponent<HTMLLIElement> {
	active: number
	pageLength: number
	state: 'prev' | 'next'
	onChangePage: (page: number | string) => void
}

const PaginationArrow: React.FC<PaginationArrowProps> = props => {
	const { children, className, active, state, onChangePage, pageLength, ...attr } = props

	const disbled = useMemo(
		() =>
			(state === 'prev' && active - 1 === 0) ||
			(state === 'next' && active + 1 === pageLength + 1),
		[active]
	)

	const computedClassName = useClassName({
		defaultClass: 'paginate_item page-item',
		appendClassName: className,
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
		<li className={computedClassName} {...attr}>
			<Link to="#" className="paginate_button page-link" onClick={handleChangePage}>
				{children}
			</Link>
		</li>
	)
}
export default PaginationArrow
