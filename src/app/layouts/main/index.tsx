import useClass from 'lib/hooks/use-class'
import { useSelector } from 'react-redux'
import { selectAppDrawer } from 'store/app/selectors'

const MainLayout: React.FC = ({ children }) => {
	const appDrawer = useSelector(selectAppDrawer)
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
