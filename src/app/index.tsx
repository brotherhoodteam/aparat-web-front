import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router from 'core/router'
import useAuth from 'hooks/use-auth'
import useClass from 'hooks/use-class'
import Drawer from 'resources/components/drawer'
import Header from 'resources/components/header'
import Notification from 'resources/components/notification'
import Overlay from 'resources/components/overlay'

import { selectAppDrawer } from 'store/app/selectors'
import { getCategoryListStartAction } from 'store/categories/slice'
import { getPlaylistsStartAction } from 'store/playlists/slice'
import { getTagsStartAction } from 'store/tags/slice'
import { signInFromLocalStorageAction } from 'store/auth/slice'
import { getVideoListStartAction } from 'store/video/slice'

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
	const isLoggedIn = useAuth()
	const dispatch = useDispatch()
	useEffect(() => {
		let credentials = localStorage.getItem('auth')
		if (credentials) {
			credentials = JSON.parse(credentials)
			dispatch(signInFromLocalStorageAction({ credentials }))
		}
	}, [])
	useEffect(() => {
		// Fetch Global data onLoad
		if (isLoggedIn) {
			dispatch(getCategoryListStartAction())
			dispatch(getPlaylistsStartAction())
			dispatch(getTagsStartAction())
			dispatch(getVideoListStartAction())
		}
	}, [isLoggedIn])
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
