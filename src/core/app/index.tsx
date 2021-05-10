import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import IntlContainer from '../react-intl/components/container'
import store from '../redux'
import Fallback from '../router/components/loader-fallback'
import Router from '../router/components/router'
const App: React.FC = () => {
	return (
		<Suspense fallback={Fallback}>
			<Provider store={store}>
				<IntlContainer>
					<Router />
				</IntlContainer>
			</Provider>
		</Suspense>
	)
}

export default App
