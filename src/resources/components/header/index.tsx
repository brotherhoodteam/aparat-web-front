import React from 'react'
import Navbar from '../navbar'
import './styles.scss'

const Header = React.memo(() => {
	console.log(' Header rerednred')
	return (
		<header className="header">
			<Navbar />
		</header>
	)
})

export default Header
