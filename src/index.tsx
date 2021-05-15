import ReactDOM from 'react-dom'
import App from './app'
import './assets/styles/_main.scss'
import IntlContainer from './core/react-intl/components/container'
import { Suspense } from 'react'
import { Provider } from 'react-redux'
import Fallback from './core/router/components/loader-fallback'
import store from './core/redux'

const Root: React.FC = () => (
	<Suspense fallback={<Fallback />}>
		<Provider store={store}>
			<IntlContainer>
				<App />
			</IntlContainer>
		</Provider>
	</Suspense>
)
ReactDOM.render(<Root />, document.getElementById('root'))
