import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface DropdownDividerProps extends BaseComponent<HTMLDivElement> {}

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

export default DropdownDivider
