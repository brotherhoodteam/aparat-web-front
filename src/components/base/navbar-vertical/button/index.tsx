import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { Link } from 'react-router-dom'

interface NavbarButtonProps extends BaseComponent<HTMLAnchorElement> {
	icon?: string
}

const NavbarButton: React.FC<NavbarButtonProps> = props => {
	const { children, className, icon, onClick, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'navbar-link',
		optionalClass: className
	})

	return (
		<Link to="#" onClick={onClick} className={computedClassName} {...attr}>
			<i className={`${icon} navbar-icon`}></i>
			<span className="navbar-text text-truncate">{children}</span>
		</Link>
	)
}

export default NavbarButton
