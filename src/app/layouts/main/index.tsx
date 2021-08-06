import useClassName from 'lib/hooks/use-class'
import { BaseComponent } from 'lib/types/component'
import { useAppDrawer } from 'store/app/hooks'

interface MainLayoutProps extends BaseComponent<HTMLDivElement> {}

const MainLayout: React.FC<MainLayoutProps> = props => {
	const { className, children, ...attr } = props

	const appDrawer = useAppDrawer()
	const computedClassName = useClassName({
		defaultClass: 'main',
		optionalClass: {
			'overflow-y-hidden': appDrawer
		},
		appendClassName: className
	})

	return (
		<main id="content" className={computedClassName} role="main" {...attr}>
			{children}
		</main>
	)
}

export default MainLayout
