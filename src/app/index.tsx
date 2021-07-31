import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Router from 'config/router'
import useAuth from 'store/auth/hooks'
import Drawer from 'app/components/drawer'
import Header from 'app/components/header'
import Notification from 'app/components/notification'
import Overlay from 'app/components/overlay'

import { fetchCategoryListRequest } from 'store/categories/slice'
import { fetchPlaylistListRequest } from 'store/playlists/slice'
import { fetchTagListRequest } from 'store/tags/slice'
import { changeAuthState, loadCredentialsFromStorageAction } from 'store/auth/slice'
import { fetchUserProfileRequest } from 'store/user/slice'
import MainLayout from './layouts/main'
import 'react-lazy-load-image-component/src/effects/blur.css'
import './styles.scss'

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
			dispatch(fetchUserProfileRequest())
			dispatch(fetchCategoryListRequest())
			dispatch(fetchPlaylistListRequest())
			dispatch(fetchTagListRequest())
		}
	}, [auth])
	return (
		<React.Fragment>
			<Header />
			<MainLayout>
				<Router />
			</MainLayout>
			<Notification />
			<Drawer />
			<Overlay />
		</React.Fragment>
	)
}

export default App
