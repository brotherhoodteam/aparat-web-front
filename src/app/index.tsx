import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Router from 'core/router'
import useAuth from 'store/auth/hooks'
import Drawer from 'components/custom/drawer'
import Header from 'components/custom/header'
import Notification from 'components/custom/notification'
import Overlay from 'components/custom/overlay'

import { fetchCategoryListRequest } from 'store/categories/slice'
import { fetchPlaylistListRequest } from 'store/playlists/slice'
import { fetchTagListRequest } from 'store/tags/slice'
import { changeAuthState, loadCredentialsFromStorageAction } from 'store/auth/slice'
import { fetchUserProfileRequest } from 'store/user/slice'
import MainLayout from './templates/main'
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
