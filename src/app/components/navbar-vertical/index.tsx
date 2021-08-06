import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import NavbarButton from './button'
import NavbarDivider from './divider'
import NavbarItem from './item'
import NavbarLink from './link'
import NavbarSubtitle from './subtitle'
import './styles.scss'

interface NavbarVerticalProps extends BaseComponent<HTMLDivElement> {}

const NavbarVertical: React.FC<NavbarVerticalProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'navbar navbar-vertical',
		optionalClass: className
	})

	return (
		<div className={computedClassName} {...attr}>
			<ul className="navbar-nav">{children}</ul>
		</div>
	)
}

export { NavbarButton, NavbarDivider, NavbarItem, NavbarLink, NavbarSubtitle }
export default NavbarVertical
