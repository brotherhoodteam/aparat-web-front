import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { useDropdown } from '..'

interface DropdownButtonProps extends BaseComponent<HTMLDivElement> {}

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

export default DropdownButton
