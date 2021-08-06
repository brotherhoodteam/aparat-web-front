import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { CSSTransition } from 'react-transition-group'
import { useDropdown } from '..'

interface DropdownMenuProps extends BaseComponent<HTMLDivElement> {}

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

export default DropdownMenu
