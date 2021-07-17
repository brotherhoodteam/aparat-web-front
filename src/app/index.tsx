import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router from 'config/router'
import useAuth from 'store/auth/hooks'
import useClass from 'core/hooks/use-class'
import Drawer from 'app/components/drawer'
import Header from 'app/components/header'
import Notification from 'app/components/notification'
import Overlay from 'app/components/overlay'

import { selectAppDrawer } from 'store/app/selectors'
import { fetchCategoryListRequest } from 'store/categories/slice'
import { fetchPlaylistListRequest } from 'store/playlists/slice'
import { fetchTagListRequest } from 'store/tags/slice'
import { changeAuthState, loadCredentialsFromStorageAction } from 'store/auth/slice'

import './styles.scss'

const MainContainer: React.FC = ({ children }) => {
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
	const { auth } = useAuth()
	const dispatch = useDispatch()

	useEffect(() => {
		let credentials = localStorage.getItem('auth')
		if (credentials) {
			credentials = JSON.parse(credentials)
			dispatch(loadCredentialsFromStorageAction({ credentials }))
		} else {
			dispatch(changeAuthState())
		}
	}, [])
	useEffect(() => {
		// Fetch Global data onLoad
		if (auth) {
			dispatch(fetchCategoryListRequest())
			dispatch(fetchPlaylistListRequest())
			dispatch(fetchTagListRequest())
		}
	}, [auth])
	return (
		<React.Fragment>
			<Header />
			<MainContainer>
				<Router />
			</MainContainer>
			<Notification />
			<Drawer />
			<Overlay />
		</React.Fragment>
	)
}

export default App
