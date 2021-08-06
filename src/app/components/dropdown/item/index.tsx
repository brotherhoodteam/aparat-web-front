import { Location, LocationDescriptor } from 'history'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { useDropdown } from '..'

interface DropdownItemProps extends BaseComponent<HTMLAnchorElement> {
	to?:
		| LocationDescriptor<unknown>
		| ((location: Location<unknown>) => LocationDescriptor<unknown>)
}

const DropdownItem: React.FC<DropdownItemProps> = props => {
	const { children, onClick, to, className, ...attr } = props

	const { setIsOpen } = useDropdown()

	const computedClassName = useClassName({
		defaultClass: 'dropdown-item',
		appendClassName: className
	})

	return (
		<Link
			to={to ? to : '#'}
			className={computedClassName}
			onClick={(e: MouseEvent<HTMLAnchorElement>) => {
				if (to) {
					setIsOpen((prev: boolean) => !prev)
				}

				onClick && onClick(e)
			}}
			{...attr}
		>
			{children}
		</Link>
	)
}

export default DropdownItem
