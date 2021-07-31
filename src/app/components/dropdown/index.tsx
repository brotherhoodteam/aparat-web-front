import { createContext, MouseEvent, useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import useClass from 'lib/hooks/use-class'
import useClickOutside from 'lib/hooks/use-click-outside'
import { Location, LocationDescriptor } from 'history'
import './styles.scss'

interface DropdownProps {
	direction?: 'right' | 'left'
}
interface DropdownButtonPorps {}
interface DropdownItemPorps {
	to?:
		| LocationDescriptor<unknown>
		| ((location: Location<unknown>) => LocationDescriptor<unknown>)
	onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
}
interface DropdownMenuPorps {}

const DropdownStateContext = createContext<any>(null)
const DropdownDispatchContext = createContext<any>(null)

const Dropdown: React.FC<DropdownProps> = ({ children, direction }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const dropDwonRef = useRef<HTMLDivElement>(null)
	const directionClass = `dropdown-${direction}`
	const directionDefaultClass = 'dropdown-left'
	const styles = useClass({
		defaultClass: 'dropdown',
		optionalClass: {
			[directionClass]: direction,
			[directionDefaultClass]: !direction
		}
	})
	const callback = () => {
		setIsOpen(false)
	}
	useClickOutside(dropDwonRef, callback)

	return (
		<DropdownStateContext.Provider value={isOpen}>
			<DropdownDispatchContext.Provider value={setIsOpen}>
				<div ref={dropDwonRef} className={styles}>
					{children}
				</div>
			</DropdownDispatchContext.Provider>
		</DropdownStateContext.Provider>
	)
}

const DropdownButton: React.FC<DropdownButtonPorps> = ({ children }) => {
	const { setIsOpen } = useDropdown()
	return (
		<div
			className="dropdown-button"
			onClick={() => {
				setIsOpen((prev: boolean) => !prev)
			}}
		>
			{children}
		</div>
	)
}
const DropdownMenu: React.FC<DropdownMenuPorps> = ({ children }) => {
	const { isOpen } = useDropdown()
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
			<div className="dropdown-menu">{children}</div>
		</CSSTransition>
	)
}

const DropdownHeader: React.FC = ({ children }) => {
	return <div className="dropdown-header">{children}</div>
}
const DropdownItem: React.FC<DropdownItemPorps> = ({ children, onClick, to }) => {
	const { setIsOpen } = useDropdown()
	return to ? (
		<Link
			to={to}
			className="dropdown-item"
			onClick={(e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
				setIsOpen((prev: boolean) => !prev)
				onClick && onClick(e)
			}}
		>
			{children}
		</Link>
	) : (
		<span className="dropdown-item" onClick={onClick}>
			{children}
		</span>
	)
}
const DropdownDivider: React.FC = ({ children }) => {
	return <div className="dropdown-divider">{children}</div>
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
