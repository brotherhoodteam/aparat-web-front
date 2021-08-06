import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import NavbarButton from './navbar-button'
import NavbarDivider from './navbar-divider'
import NavbarItem from './navbar-item'
import NavbarLink from './navbar-link'
import NavbarSubtitle from './navbar-subtitle'
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
