import { createContext, MouseEvent, useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import useClassName from 'lib/hooks/use-class'
import useClickOutside from 'lib/hooks/use-click-outside'
import { Location, LocationDescriptor } from 'history'
import { BaseComponent } from 'lib/types/component'
import './styles.scss'

// TYPES
interface DropdownProps extends BaseComponent<HTMLDivElement> {
	direction?: 'right' | 'left'
}
interface DropdownButtonProps extends BaseComponent<HTMLDivElement> {}
interface DropdownItemProps extends BaseComponent<HTMLAnchorElement> {
	to?:
		| LocationDescriptor<unknown>
		| ((location: Location<unknown>) => LocationDescriptor<unknown>)
}
// interface DropdownItemProps extends BaseComponent<HTMLAnchorElement> {
// 	to?:
// 		| LocationDescriptor<unknown>
// 		| ((location: Location<unknown>) => LocationDescriptor<unknown>)
// 	onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
// }
interface DropdownMenuProps extends BaseComponent<HTMLDivElement> {}
interface DropdownHeaderProps extends BaseComponent<HTMLDivElement> {}
interface DropdownDividerProps extends BaseComponent<HTMLDivElement> {}

// CONTEXT
const DropdownStateContext = createContext<any>(null)
const DropdownDispatchContext = createContext<any>(null)

const Dropdown: React.FC<DropdownProps> = props => {
	const { children, direction, className, ...attr } = props

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const dropDwonRef = useRef<HTMLDivElement>(null)
	const directionClass = `dropdown-${direction}`
	const directionDefaultClass = 'dropdown-left'

	const computedClassName = useClassName({
		defaultClass: 'dropdown',
		optionalClass: {
			[directionClass]: direction,
			[directionDefaultClass]: !direction
		},
		appendClassName: className
	})
	const callback = () => {
		setIsOpen(false)
	}
	useClickOutside(dropDwonRef, callback)

	return (
		<DropdownStateContext.Provider value={isOpen}>
			<DropdownDispatchContext.Provider value={setIsOpen}>
				<div ref={dropDwonRef} className={computedClassName} {...attr}>
					{children}
				</div>
			</DropdownDispatchContext.Provider>
		</DropdownStateContext.Provider>
	)
}

const DropdownButton: React.FC<DropdownButtonProps> = props => {
	const { children, className, ...attr } = props

	const { setIsOpen } = useDropdown()

	const computedClassName = useClassName({
		defaultClass: 'dropdown-button',
		appendClassName: className
	})

	return (
		<div
			className={computedClassName}
			onClick={() => {
				setIsOpen((prev: boolean) => !prev)
			}}
			{...attr}
		>
			{children}
		</div>
	)
}

const DropdownMenu: React.FC<DropdownMenuProps> = props => {
	const { children, className, ...attr } = props

	const { isOpen } = useDropdown()

	const computedClassName = useClassName({
		defaultClass: 'dropdown-menu',
		appendClassName: className
	})

	return (
		<CSSTransition
			in={isOpen}
			timeout={300}
			classNames={{
				enter: 'animate hs',
				enterDone: 'animate hs-initialized',
				exit: 'animate hs-initialized',
				exitActive: 'animate hs-closing',
				exitDone: 'hs-hidden'
			}}
			unmountOnExit
		>
			<div className={computedClassName} {...attr}>
				{children}
			</div>
		</CSSTransition>
	)
}

const DropdownHeader: React.FC<DropdownHeaderProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'dropdown-header',
		appendClassName: className
	})

	return (
		<div className={computedClassName} {...attr}>
			{children}
		</div>
	)
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

const DropdownDivider: React.FC<DropdownDividerProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'dropdown-divider',
		appendClassName: className
	})

	return (
		<div className={computedClassName} {...attr}>
			{children}
		</div>
	)
}

const useDropdown = () => {
	const isOpen = useContext(DropdownStateContext)
	const setIsOpen = useContext(DropdownDispatchContext)
	if (isOpen === null) throw new Error('Error Happend  in Dropdown hook')
	if (!!setIsOpen === null) throw new Error('Error Happend  in Dropdown hook')

	return { isOpen, setIsOpen }
}
export {
	Dropdown,
	DropdownButton,
	DropdownMenu,
	DropdownHeader,
	DropdownItem,
	DropdownDivider
}
