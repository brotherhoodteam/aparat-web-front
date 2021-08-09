import { NavLink } from 'react-router-dom'
import useClassName from 'lib/hooks/use-class'

import { Location, LocationDescriptor } from 'history'
import { BaseComponent } from 'lib/types/component'

interface NavbarLinkProps extends BaseComponent<HTMLAnchorElement> {
	icon?: string
	slug:
		| LocationDescriptor<unknown>
		| ((location: Location<unknown>) => LocationDescriptor<unknown>)
	exact?: boolean
}

const NavbarLink: React.FC<NavbarLinkProps> = props => {
	const { children, className, icon, slug, exact, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'navbar-link',
		optionalClass: className
	})

	return (
		<NavLink
			to={slug}
			exact={exact}
			activeClassName="active"
			className={computedClassName}
			{...attr}
		>
			<i className={`${icon} navbar-icon`}></i>
			<span className="navbar-text text-truncate">{children}</span>
		</NavLink>
	)
}

export default NavbarLink
