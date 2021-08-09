import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import NavbarTabItem from './navbar-item'
import NavbarTabLink from './navbar-link'
import './styles.scss'

interface NavbarTabProps extends BaseComponent<HTMLUListElement> {}

const NavbarTab: React.FC<NavbarTabProps> = props => {
	const { children, className, ...attr } = props
	const computedClassName = useClassName({
		defaultClass: 'nav nav-tabs page-header-tabs',
		appendClassName: className
	})

	return (
		<div className="js-nav-scroller hs-nav-scroller-horizontal">
			<ul className={computedClassName} {...attr}>
				{children}
			</ul>
		</div>
	)
}

export { NavbarTabItem, NavbarTabLink }
export default NavbarTab
