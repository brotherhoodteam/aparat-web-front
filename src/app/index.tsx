import React from 'react'
import Router from '../core/router/components/router'
import Notification from '../resources/components/notification'

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
		</>
	)
}

export default App
