import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { Link } from 'react-router-dom'

interface PaginationItemProps extends BaseComponent<HTMLLIElement> {
	page: number
	active: number
	onChangePage: (page: number | string) => void
}

const PaginationItem: React.FC<PaginationItemProps> = props => {
	const { children, className, page, active, onChangePage, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'paginate_item page-item',
		appendClassName: className,
		optionalClass: {
			['active']: active == page
		}
	})

	return (
		<li className={computedClassName} {...attr}>
			<Link
				to="#"
				className="paginate_button page-link"
				onClick={() => {
					onChangePage(page)
				}}
			>
				{page}
			</Link>
		</li>
	)
}

export default PaginationItem
