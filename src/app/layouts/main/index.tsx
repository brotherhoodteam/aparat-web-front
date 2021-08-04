import useClass from 'lib/hooks/use-class'
import { useAppDrawer } from 'store/app/hooks'

const MainLayout: React.FC = ({ children }) => {
	const appDrawer = useAppDrawer()
	const styles = useClass({
		defaultClass: 'main',
		optionalClass: {
			'overflow-y-hidden': appDrawer
		}
	})
	return (
		<main id="content" className={styles} role="main">
			{children}
		</main>
	)
}

export default MainLayout
