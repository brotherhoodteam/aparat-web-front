import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

import store from './store'
import IntlContainer from './config/react-intl/react-intl.container'
import './assets/styles/_main.scss'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

const Main: React.FC = () => (
	<BrowserRouter>
		<Suspense fallback={<div>loading</div>}>
			<Provider store={store}>
				<IntlContainer>
					<App />
				</IntlContainer>
			</Provider>
		</Suspense>
	</BrowserRouter>
)
ReactDOM.render(<Main />, document.getElementById('root'))
