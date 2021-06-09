import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Router from '../core/router'
import useAuth from '../hooks/use-auth'
import useClass from '../hooks/use-class'
import Drawer from '../resources/components/drawer'
import Header from '../resources/components/header'
import Notification from '../resources/components/notification'
import Overlay from '../resources/components/overlay'

import { selectAppDrawer } from '../store/app/selectors'
import { getCategoriesStartAction } from '../store/categories/slice'
import { getPlaylistsStartAction } from '../store/playlists/slice'
import { getTagsStartAction } from '../store/tags/slice'

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
	const isLoggedIn = useAuth(true)
	const dispatch = useDispatch()

	useEffect(() => {
		// Fetch Global data onLoad
		if (isLoggedIn) {
			dispatch(getCategoriesStartAction({}))
			dispatch(getPlaylistsStartAction({}))
			dispatch(getTagsStartAction())
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
