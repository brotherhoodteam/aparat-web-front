import { createContext, useContext, useRef, useState } from 'react'
import { BaseComponent } from 'lib/types/component'
import useClassName from 'lib/hooks/use-class'
import useClickOutside from 'lib/hooks/use-click-outside'
import DropdownButton from './button'
import DropdownDivider from './divider'
import DropdownHeader from './header'
import DropdownItem from './item'
import DropdownMenu from './menu'
import './styles.scss'

// TYPES
interface DropdownProps extends BaseComponent<HTMLDivElement> {
	direction?: 'right' | 'left'
}

// CONTEXT
const DropdownStateContext = createContext<any>(null)
const DropdownDispatchContext = createContext<any>(null)

const Dropdown: React.FC<DropdownProps> = props => {
	const { children, direction, className, ...attr } = props
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const dropDwonRef = useRef<HTMLDivElement>(null)

	const options = {
		className: 'dropdown',
		dir: {
			default: 'dropdown-left',
			className: `dropdown-${direction}`
		}
	}

	const computedClassName = useClassName({
		defaultClass: options.className,
		optionalClass: {
			[options.dir.className]: direction,
			[options.dir.default]: !direction
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

export const useDropdown = () => {
	const isOpen = useContext(DropdownStateContext)
	const setIsOpen = useContext(DropdownDispatchContext)
	if (isOpen === null) throw new Error('Error Happend  in Dropdown hook')
	if (!!setIsOpen === null) throw new Error('Error Happend  in Dropdown hook')

	return { isOpen, setIsOpen }
}
export { DropdownButton, DropdownMenu, DropdownHeader, DropdownItem, DropdownDivider }
export default Dropdown
