import React from 'react'
import Router from '../core/router/components/router'

const MainContainer: React.FC = ({ children }) => {
	return (
		<main id="content" className="main" role="main">
			{children}
		</main>
	)
}

const App: React.FC = () => {
	return <Router />
}

export default App
