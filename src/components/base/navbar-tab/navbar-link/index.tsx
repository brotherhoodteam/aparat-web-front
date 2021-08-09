import { Location, LocationDescriptor } from 'history'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { NavLink } from 'react-router-dom'

interface NavbarTabLinkProps extends BaseComponent<HTMLAnchorElement> {
	slug:
		| LocationDescriptor<unknown>
		| ((location: Location<unknown>) => LocationDescriptor<unknown>)
	exact?: boolean
}
const NavbarTabLink: React.FC<NavbarTabLinkProps> = props => {
	const { children, className, slug, exact, ...attr } = props
	const computedClassName = useClassName({
		defaultClass: 'nav-link',
		appendClassName: className
	})

	return (
		<NavLink
			activeClassName="active"
			exact={exact}
			to={slug}
			className={computedClassName}
			{...attr}
		>
			{children}
		</NavLink>
	)
}

export default NavbarTabLink
