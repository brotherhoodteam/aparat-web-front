import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface DropdownHeaderProps extends BaseComponent<HTMLDivElement> {}

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

export default DropdownHeader
