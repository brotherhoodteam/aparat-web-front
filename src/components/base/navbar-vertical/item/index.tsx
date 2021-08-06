import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface NavbarItemProps extends BaseComponent<HTMLLIElement> {}

const NavbarItem: React.FC<NavbarItemProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'navbar-item',
		optionalClass: className
	})

	return (
		<li className={computedClassName} {...attr}>
			{children}
		</li>
	)
}
export default NavbarItem
