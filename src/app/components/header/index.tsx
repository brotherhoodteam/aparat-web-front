import React from 'react'
import Navbar from '../navbar'
import './styles.scss'

const Header = React.memo(() => {
	return (
		<header className="header">
			<Navbar />
		</header>
	)
})

export default Header
