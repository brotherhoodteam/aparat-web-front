import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface NavbarDividerProps extends BaseComponent<HTMLDivElement> {}

const NavbarDivider: React.FC<NavbarDividerProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'navbar-divider',
		optionalClass: className
	})

	return <div className={computedClassName} {...attr}></div>
}
export default NavbarDivider
