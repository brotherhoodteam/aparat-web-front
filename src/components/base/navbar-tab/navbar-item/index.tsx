import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface NavbarTabItemProps extends BaseComponent<HTMLLIElement> {}
const NavbarTabItem: React.FC<NavbarTabItemProps> = props => {
	const { children, className, ...attr } = props
	const computedClassName = useClassName({
		defaultClass: 'nav-item',
		appendClassName: className
	})

	return (
		<li className={computedClassName} {...attr}>
			{children}
		</li>
	)
}

export default NavbarTabItem
