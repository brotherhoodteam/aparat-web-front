import React from 'react'
import Router from '../core/router/components/router'
import Drawer from '../resources/components/drawer'
import Notification from '../resources/components/notification'
import Overlay from '../resources/components/overlay'

const MainContainer: React.FC = ({ children }) => {
	return (
		<main id="content" className="main" role="main">
			{children}
		</main>
	)
}

const App: React.FC = () => {
	return (
		<>
			<Router />
			<Notification />
			<Drawer />
			<Overlay />
		</>
	)
}

export default App
