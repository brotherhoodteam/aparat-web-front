import Button from 'app/elements/button'
import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'

interface GuestNavProps extends BaseComponent<HTMLUListElement> {}

const GuestNavbar: React.FC<GuestNavProps> = props => {
	const { children, className, ...attr } = props

	const computedClassName = useClassName({
		defaultClass: 'navbar-nav',
		optionalClass: className
	})

	return (
		<ul className={computedClassName} {...attr}>
			<li className="navbar-item">
				<Button to="/signin" variant="solid" color="primary" size="sm">
					حساب ‌کاربری
				</Button>
			</li>
		</ul>
	)
}

export default GuestNavbar
