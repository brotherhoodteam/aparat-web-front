import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface NavbarSubtitleProps extends BaseComponent<HTMLSpanElement> {}

const NavbarSubtitle: React.FC<NavbarSubtitleProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'navbar-subtitle',
		optionalClass: className
	})

	return (
		<span className={computedClassName} {...attr}>
			{children}
		</span>
	)
}
export default NavbarSubtitle
