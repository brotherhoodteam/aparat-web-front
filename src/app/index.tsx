import React from 'react'
import { useSelector } from 'react-redux'
import Router from '../core/router/components/router'
import useClass from '../hooks/use-class'
import Drawer from '../resources/components/drawer'
import Header from '../resources/components/header'
import Notification from '../resources/components/notification'
import Overlay from '../resources/components/overlay'
import { selectAppDrawer } from '../store/app/selectors'

import './styles.scss'

const MainContainer: React.FC = ({ children }) => {
	console.log('MainContainer render')
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

const App: React.FC = () => {
	console.log('App render')

	return (
		<>
			<Header />
			<MainContainer>
				<Router />
			</MainContainer>
			<Notification />
			<Drawer />
			<Overlay />
		</>
	)
}

export default App
